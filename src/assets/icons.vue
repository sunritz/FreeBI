<template>
  <div style="display: none;">
    <svg>
      <symbol id="activeRingChart"  viewBox="0 0 115 115" >
        <circle class="st0" cx="31.8" cy="62" r="29.7" />
        <g>
          <g>
            <defs>
              <rect id="SVGID_1_" x="9.4" y="5.7" width="88.6" height="88.7" />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlink:href="#SVGID_1_" style="overflow:visible;" />
            </clipPath>
            <path class="st1"
              d="M15.9,56.6c0,17,14.1,31.1,31.1,31.1c16.1,0,29.2-12.1,30.8-27.9H43.8V25.8C28,27.4,15.9,40.5,15.9,56.6
        L15.9,56.6z M50.3,53.3h34.4v3.3c0,21-16.7,37.7-37.7,37.7c-21,0-37.7-16.7-37.7-37.7S26.1,18.9,47,18.9h3.3V53.3z M50.3,53.3" />
          </g>
          <path class="st2" d="M65.1,38.6h25.9C89.3,24.8,78.5,14,65.1,12.7V38.6z M61.8,5.8c20,0,36,16.1,36,36v3.3H58.5V5.8H61.8z
       M61.8,5.8" />
        </g>
      </symbol>

      <symbol id="charts"  viewBox="0 0 115 115" >
        <circle class="st0" cx="32" cy="60.3" r="29.7" />
        <g>
          <g>
            <defs>
              <rect id="SVGID_1_" x="7.5" y="11.3" width="89.7" height="65.5" />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlink:href="#SVGID_1_" style="overflow:visible;" />
            </clipPath>
            <path class="st1" d="M93,74.7c-0.7,1.7-2.8,2.4-4.5,1.7c-1.7-0.7-2.4-2.8-1.7-4.5c2.4-4.8,3.4-10.3,3.4-15.9
      			c0-4.5-0.7-8.6-2.1-12.4c-0.7-1.7,0.3-3.8,2.1-4.5c1.7-0.7,3.8,0.3,4.5,2.1c1.7,4.8,2.4,9.7,2.4,14.8C97.1,62.7,95.7,68.9,93,74.7
      			L93,74.7z M67.5,13.7c1.7,0.7,2.8,2.8,2.1,4.5c-0.7,1.7-2.8,2.8-4.5,2.1c-4.1-1.4-8.3-2.1-12.8-2.1c-21,0-37.9,16.9-37.9,37.9
      			c0,5.5,1,11,3.4,15.9c0.7,1.7,0,3.8-1.7,4.5c-1.7,0.7-3.8,0-4.5-1.7c-2.8-5.9-4.1-12.1-4.1-18.6c0-24.8,20-44.8,44.8-44.8
      			C57.5,11.3,62.6,12.3,67.5,13.7L67.5,13.7z M67.5,13.7" />
          </g>
          <path class="st2" d="M62.6,41l17.6-17.6c1.4-1.4,3.4-1.4,4.8,0c1.4,1.4,1.4,3.4,0,4.8L67.5,45.8c-1.4,1.4-3.4,1.4-4.8,0
      		C61.3,44.4,61.3,42.3,62.6,41L62.6,41z M62.6,41" />
          <path class="st2" d="M52.3,73.4c-9.7,0-17.2-7.6-17.2-17.2c0-9.7,7.6-17.2,17.2-17.2c9.7,0,17.2,7.6,17.2,17.2
      		C69.5,65.8,62,73.4,52.3,73.4L52.3,73.4z M52.3,66.5c5.9,0,10.3-4.5,10.3-10.3c0-5.9-4.5-10.3-10.3-10.3c-5.9,0-10.3,4.5-10.3,10.3
      		C42,62,46.4,66.5,52.3,66.5L52.3,66.5z M52.3,66.5" />
        </g>
      </symbol>


      <symbol id="waterLeavelPond"  viewBox="0 0 118 118">
        <circle class="st0" cx="31.2" cy="64.2" r="29.7" />
        <g>
          <g>
            <defs>
              <rect id="SVGID_1_" x="6.8" y="4.8" width="91.7" height="89.9" />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlink:href="#SVGID_1_" style="overflow:visible;" />
            </clipPath>
            <path class="st1" d="M33.9,66.4c-1.4,1.4-3.5,1.1-4.9-0.4c-1.4-1.4-1.1-3.5,0.4-4.9c4.2-3.9,9.2-4.9,13.7-2.5
       			c1.8,0.7,3.2,1.8,4.2,3.5c0.4,0.4,0.4,0.4,0.7,1.1c1.4,1.8,2.1,2.1,4.9,1.8c1.1,0,2.1-1.1,4.6-3.5l0.7-0.7
       			c6.7-7.4,12.3-9.2,21.1-2.1c1.4,1.1,1.8,3.5,0.7,4.9c-1.1,1.4-3.5,1.8-4.9,0.7c-5.3-4.2-7-3.9-11.6,1.4l-0.7,0.7
       			c-3.5,3.9-5.6,5.3-9.2,5.6c-5.3,0.4-8.1-1.1-10.9-4.2L42,67.1c-0.7-0.7-1.4-1.4-2.1-1.8C38.1,63.9,36,64.3,33.9,66.4L33.9,66.4z
       			 M33.9,66.4" />
            <path class="st2" d="M38.5,5.4c1.8-0.7,3.9,0.4,4.6,2.1c0.7,1.8-0.4,3.9-2.1,4.6C24.7,17,13.8,31.8,13.8,48.7
       			c0,21.5,17.3,38.8,38.8,38.8s38.8-17.3,38.8-38.8c0-16.9-10.9-31.7-27.1-37c-1.8-0.7-2.8-2.5-2.1-4.6C62.8,5,64.5,4.7,66.7,5
       			c18.7,6,31.7,23.6,31.7,43.7c0,25.4-20.4,45.8-45.8,45.8c-25.4,0-45.8-20.4-45.8-45.8C6.7,29,19.8,11.4,38.5,5.4L38.5,5.4z
       			 M38.5,5.4" />
          </g>
        </g>
      </symbol>

      <symbol id="capsuleChart"  viewBox="0 0 115 115" >
        <circle class="st0" cx="32.7" cy="64.1" r="29.7" />
        <g>
          <g>
            <defs>
              <rect id="SVGID_1_" x="12.4" y="7.3" width="83.4" height="83.3" />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlink:href="#SVGID_1_" style="overflow:visible;" />
            </clipPath>
            <path class="st1" d="M76.5,16.9c0,5.4-4.2,9.6-9.6,9.6c-5.4,0-9.6-4.2-9.6-9.6c0-5.4,4.2-9.6,9.6-9.6
			C72.3,7.3,76.5,11.5,76.5,16.9L76.5,16.9z M70.1,16.9c0-1.9-1.3-3.2-3.2-3.2c-1.9,0-3.2,1.3-3.2,3.2c0,1.9,1.3,3.2,3.2,3.2
			C68.8,20.1,70.1,18.8,70.1,16.9L70.1,16.9z M63.7,48.9c0,5.4-4.2,9.6-9.6,9.6c-5.4,0-9.6-4.2-9.6-9.6c0-5.4,4.2-9.6,9.6-9.6
			C59.5,39.3,63.7,43.5,63.7,48.9L63.7,48.9z M57.2,48.9c0-1.9-1.3-3.2-3.2-3.2c-1.9,0-3.2,1.3-3.2,3.2c0,1.9,1.3,3.2,3.2,3.2
			C56,52.1,57.2,50.9,57.2,48.9L57.2,48.9z M50.8,80.9c0,5.4-4.2,9.6-9.6,9.6c-5.4,0-9.6-4.2-9.6-9.6c0-5.4,4.2-9.6,9.6-9.6
			C46.7,71.3,50.8,75.5,50.8,80.9L50.8,80.9z M44.4,80.9c0-1.9-1.3-3.2-3.2-3.2c-1.9,0-3.2,1.3-3.2,3.2c0,1.9,1.3,3.2,3.2,3.2
			C43.2,84.1,44.4,82.9,44.4,80.9L44.4,80.9z M44.4,80.9" />
          </g>
          <path class="st2" d="M12.4,16.9c0-1.9,1.3-3.2,3.2-3.2h32c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2h-32
		C13.7,20.1,12.4,18.8,12.4,16.9L12.4,16.9z M57.2,80.9c0-1.9,1.3-3.2,3.2-3.2h32c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2h-32
		C58.5,84.1,57.2,82.9,57.2,80.9L57.2,80.9z M12.4,48.9c0-1.9,1.3-3.2,3.2-3.2h19.2c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2
		H15.6C13.7,52.1,12.4,50.9,12.4,48.9L12.4,48.9z M70.1,48.9c0-1.9,1.3-3.2,3.2-3.2h19.2c1.9,0,3.2,1.3,3.2,3.2
		c0,1.9-1.3,3.2-3.2,3.2H73.3C71.3,52.1,70.1,50.9,70.1,48.9L70.1,48.9z M82.9,16.9c0-1.9,1.3-3.2,3.2-3.2h6.4
		c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2h-6.4C84.1,20.1,82.9,18.8,82.9,16.9L82.9,16.9z M12.4,80.9c0-1.9,1.3-3.2,3.2-3.2H22
		c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2h-6.4C13.7,84.1,12.4,82.9,12.4,80.9L12.4,80.9z M12.4,80.9" />
        </g>
      </symbol>


      <symbol id="percentPond"  viewBox="0 0 100 100" >
        <circle class="st0" cx="37.2" cy="59.1" r="29.7" />
        <g>
          <g>
            <g>
              <g>
                <path class="st1"
                  d="M30.5,32.7c0,2-1.4,3.4-3.4,3.4c-2,0-3.4-1.4-3.4-3.4V22.5c0-3.7,3-6.8,6.8-6.8h54.2c3.7,0,6.8,3,6.8,6.8
      					v10.2c0,2-1.4,3.4-3.4,3.4c-2,0-3.4-1.4-3.4-3.4V22.5H30.5V32.7z M84.7,66.6c0-2,1.4-3.4,3.4-3.4c2,0,3.4,1.4,3.4,3.4v10.2
      					c0,3.7-3,6.8-6.8,6.8H30.5c-3.7,0-6.8-3-6.8-6.8V66.6c0-2,1.4-3.4,3.4-3.4c2,0,3.4,1.4,3.4,3.4v10.2h54.2V66.6z M84.7,66.6" />
              </g>
            </g>
            <g class="st2">
              <g>
                <path class="st1" d="M36.2,52c-0.7,0.7-1.4,1-2.4,1h-6.8c-2,0-3.4-1.4-3.4-3.4c0-2,1.4-3.4,3.4-3.4h5.4L45,33.7
      					c1.7-1.7,4.1-1.4,5.4,0.7l10.8,19l3.7-5.8c0.7-1,1.7-1.4,2.7-1.4H88c2,0,3.4,1.4,3.4,3.4c0,2-1.4,3.4-3.4,3.4H69.4l-5.8,8.8
      					c-1.4,2-4.4,2-5.8-0.3l-11.5-20L36.2,52z M36.2,52" />
              </g>
            </g>
          </g>
        </g>
        <circle class="st0" cx="14.8" cy="-377.7" r="29.7" />
        <g>
          <g>
            <g>
              <g>
                <path class="st1"
                  d="M8-404.1c0,2-1.4,3.4-3.4,3.4c-2,0-3.4-1.4-3.4-3.4v-10.2c0-3.7,3-6.8,6.8-6.8h54.2c3.7,0,6.8,3,6.8,6.8
      					v10.2c0,2-1.4,3.4-3.4,3.4c-2,0-3.4-1.4-3.4-3.4v-10.2H8V-404.1z M62.2-370.2c0-2,1.4-3.4,3.4-3.4c2,0,3.4,1.4,3.4,3.4v10.2
      					c0,3.7-3,6.8-6.8,6.8H8c-3.7,0-6.8-3-6.8-6.8v-10.2c0-2,1.4-3.4,3.4-3.4c2,0,3.4,1.4,3.4,3.4v10.2h54.2V-370.2z M62.2-370.2" />
              </g>
            </g>
            <g class="st2">
              <g>
                <path class="st1" d="M13.8-384.8c-0.7,0.7-1.4,1-2.4,1H4.6c-2,0-3.4-1.4-3.4-3.4c0-2,1.4-3.4,3.4-3.4H10l12.5-12.5
      					c1.7-1.7,4.1-1.4,5.4,0.7l10.8,19l3.7-5.8c0.7-1,1.7-1.4,2.7-1.4h20.3c2,0,3.4,1.4,3.4,3.4c0,2-1.4,3.4-3.4,3.4H47l-5.8,8.8
      					c-1.4,2-4.4,2-5.8-0.3l-11.5-20L13.8-384.8z M13.8-384.8" />
              </g>
            </g>
          </g>
        </g>
      </symbol>


      <symbol id="conicalColumnChart"  viewBox="0 0 100 100" >
        <circle class="st0" cx="35.7" cy="56.3" r="29.7" />
        <path class="st1" d="M26.9,60.4c1.9,0,3.1,1.2,3.1,3.1v12.4c0,1.9-1.2,3.1-3.1,3.1c-1.9,0-3.1-1.2-3.1-3.1V63.5
	C23.8,61.6,25.1,60.4,26.9,60.4L26.9,60.4z M48.6,41.8c1.9,0,3.1,1.2,3.1,3.1v31c0,1.9-1.2,3.1-3.1,3.1c-1.9,0-3.1-1.2-3.1-3.1v-31
	C45.5,43,46.7,41.8,48.6,41.8L48.6,41.8z M67.2,54.2c1.9,0,3.1,1.2,3.1,3.1v18.6c0,1.9-1.2,3.1-3.1,3.1c-1.9,0-3.1-1.2-3.1-3.1V57.3
	C64.1,55.4,65.3,54.2,67.2,54.2L67.2,54.2z M88.8,38.7c1.9,0,3.1,1.2,3.1,3.1v34.1c0,1.9-1.2,3.1-3.1,3.1c-1.9,0-3.1-1.2-3.1-3.1
	V41.8C85.7,39.9,87,38.7,88.8,38.7L88.8,38.7z M88.8,38.7" />
        <path class="st2" d="M48.9,26.6L25.1,50.5c-1.2,1.2-3.1,1.2-4.3,0c-1.2-1.2-1.2-3.1,0-4.3L48.9,18l18.6,18.6l21.1-21.1
	c1.2-1.2,3.1-1.2,4.3,0c1.2,1.2,1.2,3.1,0,4.3L67.5,45.2L48.9,26.6z M48.9,26.6" />
        <rect x="19.8" y="14.5" class="st3" width="74" height="64.5" />
      </symbol>


     <symbol id="scrollBoard"  viewBox="0 0 100 100" >
      <circle class="st0" cx="34.6" cy="62" r="29.7"/>
      <g>
      	<path class="st1" d="M82,52.5c0,1.9-1.2,3.1-3.1,3.1H35.3c-1.9,0-3.1-1.2-3.1-3.1c0-1.9,1.2-3.1,3.1-3.1h43.6
      		C80.7,49.4,82,50.6,82,52.5L82,52.5z"/>
      	<path class="st1" d="M82,52.8"/>
      	<path class="st2" d="M82,63.1c0,1.9-1.2,3.1-3.1,3.1H35.3c-1.9,0-3.1-1.2-3.1-3.1c0-1.9,1.2-3.1,3.1-3.1h43.6
      		C80.7,59.9,82,61.2,82,63.1L82,63.1z"/>
      	<path class="st2" d="M82,41.9c0,1.9-1.2,3.1-3.1,3.1H35.3c-1.9,0-3.1-1.2-3.1-3.1c0-1.9,1.2-3.1,3.1-3.1h43.6
      		C80.7,38.8,82,40,82,41.9L82,41.9z"/>
      	<path class="st2" d="M82,40.5"/>
      	<path class="st1" d="M82,31.3c0,1.9-1.2,3.1-3.1,3.1H35.3c-1.9,0-3.1-1.2-3.1-3.1s1.2-3.1,3.1-3.1h43.6C80.7,28.2,82,29.4,82,31.3
      		L82,31.3z M82,31.3"/>
      	<path class="st1" d="M53.8,18.8c-1.9,0-3.2-1.3-3.2-3.2c0-1.9,1.3-3.2,3.2-3.2h6.4c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2
      		H53.8z M79.2,18.8c-1.9,0-3.2-1.3-3.2-3.2c0-1.9,1.3-3.2,3.2-3.2h6.4c3.5,0,6.4,2.9,6.4,6.4v51.4c0,3.5-2.9,6.4-6.4,6.4H27.8
      		c-3.5,0-6.4-2.9-6.4-6.4V18.8c0-3.5,2.9-6.4,6.4-6.4h6.4c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2h-6.4v51.4h57.8V18.8H79.2z
      		 M79.2,18.8"/>
      	<path class="st1" d="M47.1,9.2V22c0,1.9-1.3,3.2-3.2,3.2c-1.9,0-3.2-1.3-3.2-3.2V9.2c0-1.9,1.3-3.2,3.2-3.2
      		C45.8,5.9,47.1,7.2,47.1,9.2L47.1,9.2z M72.8,9.2V22c0,1.9-1.3,3.2-3.2,3.2c-1.9,0-3.2-1.3-3.2-3.2V9.2c0-1.9,1.3-3.2,3.2-3.2
      		C71.5,5.9,72.8,7.2,72.8,9.2L72.8,9.2z M72.8,9.2"/>
      </g>
     </symbol>

     <symbol id="scrollRankingBoard"  viewBox="0 0 100 100" >
     <circle class="st0" cx="35.9" cy="60.7" r="29.7"/>
     <g>
     	<path class="st1" d="M53.3,23.8c-1.9,0-3.2-1.3-3.2-3.2c0-1.9,1.3-3.2,3.2-3.2h6.4c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2
     		H53.3z M78.7,23.8c-1.9,0-3.2-1.3-3.2-3.2c0-1.9,1.3-3.2,3.2-3.2h6.4c3.5,0,6.4,2.9,6.4,6.4v51.4c0,3.5-2.9,6.4-6.4,6.4H27.3
     		c-3.5,0-6.4-2.9-6.4-6.4V23.8c0-3.5,2.9-6.4,6.4-6.4h6.4c1.9,0,3.2,1.3,3.2,3.2c0,1.9-1.3,3.2-3.2,3.2h-6.4v51.4h57.8V23.8H78.7z
     		 M78.7,23.8"/>
     	<path class="st1" d="M46.6,14.1V27c0,1.9-1.3,3.2-3.2,3.2c-1.9,0-3.2-1.3-3.2-3.2V14.1c0-1.9,1.3-3.2,3.2-3.2
     		C45.3,10.9,46.6,12.2,46.6,14.1L46.6,14.1z M72.3,14.1V27c0,1.9-1.3,3.2-3.2,3.2c-1.9,0-3.2-1.3-3.2-3.2V14.1
     		c0-1.9,1.3-3.2,3.2-3.2C71,10.9,72.3,12.2,72.3,14.1L72.3,14.1z M72.3,14.1"/>
     	<path class="st2" d="M50.8,55.6l16.1-16.1c1.3-1.3,3.2-1.3,4.5,0c1.3,1.3,1.3,3.2,0,4.5l-18,18c0,0-0.3,0.3-0.6,0.3
     		c-1.3,1-3.2,1-4.5-0.3l-9-9c-1.3-1.3-1.3-3.2,0-4.5c1.3-1.3,3.2-1.3,4.5,0L50.8,55.6z M50.8,55.6"/>
     </g>
     </symbol>



    </svg>
  </div>
</template>

<script>
  export default {
    name: 'icons',

  }
</script>

<style>
  .st0 {
    opacity: 0.5;
    fill: #6aa9e2;
  }

  .st1 {
    clip-path: url(#SVGID_2_);
    fill: #073763;
  }

  .st2 {
    opacity: 0.6;
    fill: #073763;
  }

  .st3{fill:none;}
</style>
