import { Slot, Tabs } from 'expo-router';

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/play',
          headerShown: false
        }}
      />
      <Tabs.Screen name="peeps" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};
