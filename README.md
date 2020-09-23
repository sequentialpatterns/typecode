# Functional requirements

The app consists of a set of frames that the user navigates through via buttons. Only one frame is visible to the user at a time, and the frame always fills the entire viewport. If the contents of a frame are taller than the height of viewport, the frame's height should increase past the fold to fit all of its content, and the user should be able to scroll the page to see the entire frame. If the frame's contents are shorter than the viewport height, the frame should be exactly as tall as the viewport.

Each frame (except for the "Loading" frame discussed below) follows a common template. The actual frames and their contents are populated based on a story JSON file (`public/data/story.json`), which the app should load using AJAX upon initialization.

This JSON file includes a **frames** list of frame objects. Each frame object consists of the following fields (note that some of these fields are optional), that affect how the frame is rendered and how it behaves.
- **title** Header displayed for each frame.
- **body** Body content displayed for each frame. This field contains HTML, and may consist of one or multiple `<p>` elements.
- **img** An optional image, represented as a relative path to its source file, to be dislayed alongside the body content. Note that, if a frame does not include an `img`, its body content is rendered into two columns (using CSS columns). If the frame _does_ include an `img`, however, its body content is rendered in a single column, with the image next to it in its own distinct column. The body content doesn't wrap around the image if it's taller than the image - it just continues to grow in its column.
- **colors** A map of color hex values, containing the properties:
    - **bg** The background color of the entire frame.
    - **text** The foreground color used in the frame for text, borders, etc.
- **buttons** A list of button objects. A frame can have zero, one, or two buttons. If the frame has one button, the button is displayed in the frame's lower right corner. If the frame has two buttons, the first button is displayed in the lower left corner, the second in the lower right.
    - **text** The label to display for the button.
    - **linkindex** The index of a target frame to show when the user clicks the button. The frame's index is with respect to its index position in the **frames** list.

Each frame displays a frame number in its upper right corner. The frame number is derived from the frame's index position in the **frames** list. The 0 index frame's number is 1, the 1 index frame is 2, and so on.

While the request to load the story data is pending, a "Loading" frame is displayed. The text/colors of this frame are baked into the app. Once the story data has loaded, the first frame in the **frames** list should automatically be shown.

## Running the dev environment

* open the command line shell
* install http-server [ npm install --global http-server ]
* cd into the app directory
* run "npx http-server -o"
* your default browser should open http://127.0.0.1:8080/index.html
