## Explanation of Logic

Upon loading, the interactive content player invokes the <code>mapAnnotationsByMs</code> method. 

<p><code>mapAnnotationsByMs</code> accepts tracks and a video length (in milliseconds). It loops through every millisecond of the video length and creates a hash map. In the map, each key is a millisecond and its value is an object with <code>visible</code> and <code>hidden</code> array type properties. The method then loops through each track, and then through each list of annotations per track, and populates the <code>visible</code> and <code>hidden</code> properties based on whether the startTime is less than or equal to the current millisecond and the endTime is greater than or equal to the current millisecond. The <code>visible</code> property holds an array of annotations that are visible at that millisecond. The <code>hidden</code> property holds an array of annotations that are hidden at that millisecond.</p>

<p><code>setAnnotations</code> accepts a currentTime (float, seconds). This method is called to check which annotations should be shown or hidden. This method transforms the currentTime to milliseconds and finds the appropriate key in the <code>annotationsByMsHashMap</code>. It then loops through the <code>visible</code> property of that key's value and invokes that annotation's show() method, and loops through the <code>hidden</code> property of that key's value and invokes that annotation's  hide() method.</p>

## My reasoning behind this solution

<p>My reasoning behind this solution is that, while it may take a long time to create the hash map upon initial load, the actual process of checking which annotations to hide/show will be fast. So there's a slow load, but quick check. I have never worked with video before and am unsure if I reasoned about the timestamp data type correctly. Thanks for reading and reviewing!</p>
