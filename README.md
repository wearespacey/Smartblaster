<!-- 
	Huge thank you to this repository for their amazing README template!
	https://github.com/othneildrew/Best-README-Template/blob/master/README.md
-->

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/wearespacey/smartblaster">
    <img src="https://nsa40.casimages.com/img/2019/08/11/190811015143756586.jpg" alt="Logo" width="120" height="80">
  </a>

  <h3 align="center">SpaceY project realized during the SpaceOffice hackathon</h3>

  <p align="center">
    Smart~Blaster~Detect is an angular web application that can detect wether the user is a human or a martian with the help of Custom Vision.
    <br />
    <br />
    <a href="https://github.com/wearespacey/smartblaster/issues">Report Bug</a>
    <a href="https://github.com/wearespacey/smartblaster/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [License](#license)


<!-- ABOUT THE PROJECT -->
## About The Project

At first, Smartblaster was supposed to be a rover which moves around the base while checking for wall breaches to seal.
And then... he burned. 
  <h6> RIP Roli — 04/26/2019 - 04/27/2019</h6>
  <br/>
We had 10 hours left to find a new idea and carry it out. We chose to implement Custom Vision, from Microsoft, to differentiate humans from martians.

### Built With
You will find herebelow the frameworks and dependencies used by this solution:
* [Angular](https://angular.io/) with [Visual Studio Code](https://code.visualstudio.com/)
* [Custom Vision](https://www.customvision.ai/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/wearespacey/smartblaster.git
```
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



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/wearespacey/smartblaster?style=flat-square
[contributors-url]: https://github.com/wearespacey/smartblaster/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/wearespacey/smartblaster?style=flat-square
[forks-url]: https://github.com/wearespacey/smartblaster/network/members
[stars-shield]: https://img.shields.io/github/stars/wearespacey/smartblaster?style=flat-square
[stars-url]: https://github.com/wearespacey/smartblaster/stargazers
[issues-shield]: https://img.shields.io/github/issues/wearespacey/smartblaster?style=flat-square
[issues-url]: https://github.com/wearespacey/smartblaster/issues
[license-shield]: https://img.shields.io/github/license/wearespacey/smartblaster?style=flat-square
[license-url]: https://github.com/wearespacey/smartblaster/blob/master/LICENSE
