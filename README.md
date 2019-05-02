# Smart~blaster~detect

## Smartblaster
At first, Smartblaster was supposed to be a rover which moves around the base while checking for wall breaches to seal.
And then... he burned. 

###### RIP Roli — 04/26/2019 - 04/27/2019

## Smartdetect
We had 10 hours left to find a new idea and carry it out. We chose to implement Custom Vision, from Microsoft, to differentiate humans from martians.

## How to
1. Clone the repo
2. Create a custom vision resource here : [Custom Vision](https://www.customvision.ai)
3. Save the followings in a file named `api-keys.ts` in the `src` folder
```
export const API_KEYS = {
  endpoint:
    'https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction',
  key: 'CUSTOM-VISION-KEY',
  projectId: 'PROJECT-ID',
  publishedName: 'ITERATION-NAME'
};
```
