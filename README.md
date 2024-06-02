# TechEd-Week02-Assignment

An accessible image gallery with keyboard navigation

# User stories:

- Thumbnails + full screen on click (javascript)
- media queries
- navigate with Tab and Enter
- Consider accessibility

* Steps:

1. Walking Skeleton
2. Wireframe
3. Build out HTML
4. Structure with CSS Grid and Flex
5. Javascript Elements
6. Look at stretch goals

_more planning_
thumbnails should use lower resolution images to save bandwidth

# below is the moodle assignment info:

Project: Building an accessible image gallery
Overview
Building on HTML, CSS and JavaScript skills from previous weeks, we'll build an accessible image gallery with keyboard navigation and maybe even voice announcements.

Workshop
User Stories
As a user...

🐿️ I want to browse a set of thumbnail images that load quickly
🐿️ I want to select a thumbnail and display a larger version of the image, with a description
🐿️ I expect accessible considerations like alternative text for images, and the ability to click next and previous buttons using the keyboard
Requirements
One page, with a set of thumbnail images, and a larger image
Styled appropriately with CSS, and make use of media queries.
Use client-side JavaScript to display the larger image when a thumbnail is selected
Use client-side JavaScript to navigate between images using the keyboard (tab, enter)
Planning
🎯 Plan out the UI and consider the elements you'll need to include to support the stories. Will thumbnails take up space at the top, side or bottom of the page? Will they float over the image?

Building
🎯 Display the thumbnail images. Will you use a grid, or a list? Will you use CSS Grid or Flexbox?

🎯 Display the larger image. Will you use an overlay of some kind, or a section on the same page? How would it work on smaller screens?

🎯 Handle user interaction. Will you use event listeners on the thumbnails, or on the container? How will you know which thumbnail was selected?

Stretch Goals
🏹 Handle user interaction with keyboard only (as if they have no mouse). You can use tab and enter/space like for all websites, but will you enable the use of the arrow keys as well?

✨ The document has a set of keyboard events, including keydown. This event receives an object with a .key property containing the key that was pressed. For example, ArrowRight and ArrowLeft.

🏹 Use your operating system's voiceover tools or a Screen Reader to have the computer announce the alt text of the selected image.

✨ Using role="status" like this will cause the voiceover to read out the content inside whenever it changes. Create a div, select it by id, and then try changing it's .textContext property with JS. <div id="announcer" role="status" aria-live="assertive" aria-atomic="true"></div>

Please also provide an assignment reflection in your project README.md file.
(Required)
🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

What went really well and what could have gone better?
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.

MY NOTES

CSS grid was really easy to set up, but I actually think flex for the main laybout may have been better, allowing for some automatic movement of the larger elements such as the big image container and the thumnail bar. I'd explore that option next time to make better use of the screenspace in mobile mode.

I also made the decision to strictly enfore image aspect ratio and to constrain the image to the viewport, this is an aesthetic choice I made and can cause the layout to be a bit wonky.

the thumbnails bar uses smaller files but since I'm using links I was limited to 640px, improvements to performance could be gained by creating dedicated small thumbnail files.
