HI, I heard you want to do cool VR stuff on the Web using WebGL. You came to the right place. Let's get you started:

1. Make sure you have one of the [Firefox VR enabled builds](http://vrhelloworld.com/builds/ "VR Firefox") installed
2. Make sure you have installed yeoman `npm install -g yo`
3. Install the VR WebGL generator `npm install -g generator-vrwebgl`
4. Type `yo vrwebgl PROJECT_NAME` to create a hello world VR experience in the PROJECT_NAME folder
5. Open PROJECT_NAME/index.html in your VR Browser
6. If you press 'f' the browser should go fullscreen and the content rendered in stereo mode.

If you don't like yeoman you can also copy the template manually:

1. Clone this repo
`git clone https://github.com/dmarcos/vrwebgl.git`
3. Copy the template folder to wherever you want
`cp -rf template YOUR_VR_EXPERIENCE_PATH`



