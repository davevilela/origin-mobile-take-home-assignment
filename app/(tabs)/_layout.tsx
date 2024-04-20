import { Link, Stack, Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Tab One',
            // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            // headerRight: () => (
            //   <Link href="/modal" asChild>
            //     <HeaderButton />
            //   </Link>
            // ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Tab Two',
            // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
