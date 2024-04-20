import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  AnimatePresence,
  StackProps,
  ThemeableStack,
  ThemeableStackProps,
  XStack,
  YStack,
  styled,
  useWindowDimensions,
  withStaticProperties,
} from 'tamagui';

export type StepItem = {
  key: string;
  renderItem?: () => JSX.Element;
};

type StepperControllerProps = {
  steps: StepItem[];
  initialStepIndex?: number;
};

function useStepperController(props: StepperControllerProps) {
  const [height, setHeight] = useState(0);

  const { steps, initialStepIndex = 0 } = props;

  const [stepperState, setStepperState] = useState<{
    direction: number;
    currentStepIndex: number;
  }>({
    currentStepIndex: initialStepIndex,
    direction: -1,
  });

  const { currentStepIndex, direction } = stepperState;

  const setDirection = useCallback(
    (direction: number) => {
      setStepperState((old) => {
        const nextIndex = old.currentStepIndex + direction;

        if (nextIndex < 0 || nextIndex > steps.length - 1) return old;

        return {
          currentStepIndex: nextIndex,
          direction: -direction,
        };
      });
    },
    [steps]
  );

  const prev = () => {
    setDirection(-1);
  };
  const next = () => {
    setDirection(1);
  };
  const activeStep = useMemo(() => steps[currentStepIndex], [steps, currentStepIndex]);

  const enterVariant = direction === 1 ? 'isLeft' : direction === -1 ? 'isRight' : 'defaultFade';

  const exitVariant = direction === 1 ? 'isRight' : direction === -1 ? 'isLeft' : 'defaultFade';

  const hasNext = currentStepIndex + 1 < steps.length;
  const hasPrev = currentStepIndex - 1 > 0;

  return {
    prev,
    next,
    activeStep,
    enterVariant,
    exitVariant,
    currentStepIndex,
    hasNext,
    hasPrev,
    height,
    setHeight,
    steps,
  };
}

type StepperControllerValue = ReturnType<typeof useStepperController>;

const Ctx = createContext<StepperControllerValue>({} as StepperControllerValue);

export const useStepperContext = () => {
  const context = useContext(Ctx);

  if (!context) {
    throw new Error('useStepperContext should be used within the Stepper provider.');
  }

  return context;
};

type StepperProps = StepperControllerProps & ThemeableStackProps;

function Wrapper(props: StepperProps) {
  const { steps, initialStepIndex, children, ...stackProps } = props;
  const controller = useStepperController({
    steps,
    initialStepIndex,
  });

  const { activeStep, currentStepIndex, enterVariant, exitVariant, setHeight } = controller;

  return (
    <Ctx.Provider value={controller}>
      <ThemeableStack
        {...stackProps}
        flex={1}
        onLayout={(event) => {
          setHeight(event.nativeEvent.layout.height);
        }}>
        <AnimatePresence exitBeforeEnter enterVariant={enterVariant} exitVariant={exitVariant}>
          <AnimatedYStack key={currentStepIndex} flex={1} animation="100ms" x={0} opacity={1}>
            {!!activeStep.renderItem && <activeStep.renderItem />}
          </AnimatedYStack>
        </AnimatePresence>
        {children}
      </ThemeableStack>
    </Ctx.Provider>
  );
}

const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -70, opacity: 0 } },
    isRight: { true: { x: 70, opacity: 0 } },
    defaultFade: { true: { opacity: 0 } },
  } as const,
});

export const Point = ({ active }: { active: boolean }) => {
  return <YStack br="$10" w={active ? 30 : 10} h={10} bg={active ? '$color8' : '$color6'} />;
};

function StepIndicator() {
  const { steps, currentStepIndex } = useStepperContext();
  return (
    <XStack gap={10} jc="center">
      {Array.from(Array(steps.length)).map((_, idx) => {
        const isActive = idx === currentStepIndex;
        return <Point key={idx} active={isActive} />;
      })}
    </XStack>
  );
}

function Footer(
  props: {
    render: (
      params: Pick<
        StepperControllerValue,
        'next' | 'prev' | 'currentStepIndex' | 'hasNext' | 'hasPrev'
      >
    ) => JSX.Element;
  } & StackProps
) {
  const dimensions = useWindowDimensions();

  const { render, ...stackProps } = props;
  const { currentStepIndex, next, prev, hasNext, hasPrev, height } = useStepperContext();

  const modalOffsetFromTop = dimensions.height - height;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={modalOffsetFromTop}>
      <YStack gap="$2" {...stackProps}>
        {render({ currentStepIndex, next, prev, hasNext, hasPrev })}
      </YStack>
    </KeyboardAvoidingView>
  );
}

export const Stepper = withStaticProperties(Wrapper, {
  StepIndicator,
  Footer,
});
