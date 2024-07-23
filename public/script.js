const beamsClient = new PusherPushNotifications.Client({
    instanceId: 'd8829126-86fb-4c9f-bdac-44cf291ef02a',
  })

  beamsClient.start()
    .then(() => beamsClient.addDeviceInterest('hello'))
    .then(() => console.log('Successfully registered and subscribed!'))
    .catch(console.error)

    