function action(actionName, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${ actionName }`);
      resolve();
    }, duration);
  });
}

function makeAction() {
  action("散歩", 500)
  .then(() => { 
    return action("朝食", 200);
  })
  .then(() => {
    return Promise.all([action("昼食", 500), action("おしゃべり", 100)]);
  })
  .then(() => {
    return action("夕食", 600);
  })
  .then(() => {
    return action("趣味", 400);
  });
}

function makeAction() {
  action("散歩", 500)
  .then(() => action("朝食", 200))
  .then(() => Promise.all([action("昼食", 500), action("おしゃべり", 100)]))
  .then(() => action("夕食", 600))
  .then(() => action("趣味", 400));
}

async function makeAction() {
  let result = await action("散歩", 500)
  result = await action("朝食", 200);
  result = await Promise.all([action("昼食", 500), action("おしゃべり", 100)]);
  result = await action("夕食", 600);
  result = await action("趣味", 400);
}

makeAction();