<template>
  <v-app id="inspire">
    <v-app-bar
            color="rgb(29,32,48)"
            dark
    >
      <Icon  v-on:click="insta"  class="hidden-md-and-up titleText" icon="mdi:instagram" color="white" style="font-size: 24px;" />
      <v-toolbar-title class="hidden-sm-and-up titleText" v-on:click="insta">NOMAtoNOMA</v-toolbar-title>
      <Icon v-on:click="insta"  class="hidden-sm-and-down titleText" icon="mdi:instagram" color="white" style="font-size: 24px;" />
      <v-toolbar-title class="hidden-sm-and-down titleText" v-on:click="insta">NOMAtoNOMA</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down titleText"></v-spacer>
      <Icon class="hidden-sm-and-down titleText" v-on:click="instaStrava" icon="mdi:strava" color="white" style="font-size: 24px;" />
      <v-toolbar-title class="hidden-sm-and-down titleText" v-on:click="instaStrava">NOMAtoNOMA</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div style="position: relative; z-index: 9999; background-color: #fff;">
        <v-parallax
          dark
          
          src="./assets/noma2019_17.jpg"
        >
          <v-row
          height="100%"
            align="center"
            justify="center"
          >
            <v-col
              class="text-center"
              sm="12"
            >
              <h1 style="font-size: 86px;" class="titleText   mb-2">
                NOMA to NOMA
              </h1>
              <h4 style="font-size: 46px;" class="justText">
                the Race Around the Lake
              </h4>
              <h4 class="justText">
                October 3rd, 2021 - New Orleans, LA
              </h4>
            </v-col>
          </v-row>
        </v-parallax>
      </div>
      <div style="background-color: rgb(29,32,48); height: 5vh;">
        <v-app-bar
            color="rgb(29,32,48)"
            dark
          >
            <v-btn
                    color="warning"
                    v-on:click="bikeReg"
                    class="hidden-sm-and-up titleText mr-2" 
                  >
                  Sign Up!
                  </v-btn>
            <v-btn
                    color="secondary"
                    dark
                    v-on:click="usac"
                    class="hidden-sm-and-up titleText" 
                  >
                  free one day license.
            </v-btn>
      <!-- <v-toolbar-title class="hidden-sm-and-up titleTextmr-2" v-on:click="bikeReg">Sign Up!</v-toolbar-title>
      <v-toolbar-title class="hidden-sm-and-up titleText" v-on:click="bikeReg">free one day license</v-toolbar-title> -->
            <v-btn
                    color="warning"
                    v-on:click="bikeReg"
                    class="hidden-sm-and-down titleText mr-2" 
                  >
                  Sign Up!
                  </v-btn>
            <v-btn
                    color="secondary"
                    dark
                    v-on:click="usac"
                    class="hidden-sm-and-down titleText" 
                  >
                  free one day license.
            </v-btn>
      <!-- <v-toolbar-title class="hidden-sm-and-down titleText mr-2" v-on:click="bikeReg">Sign Up!</v-toolbar-title>
      <v-toolbar-title class="hidden-sm-and-down titleText" v-on:click="bikeReg">free one day license.</v-toolbar-title> -->
      <!-- <v-spacer class="hidden-sm-and-down titleText"></v-spacer>
      <Icon class="hidden-sm-and-down titleText" v-on:click="instaStrava" icon="mdi:strava" color="white" style="font-size: 24px;" />
      <v-toolbar-title class="hidden-sm-and-down titleText" v-on:click="instaStrava">NOMAtoNOMA</v-toolbar-title> -->
    </v-app-bar>
      </div>
      <div style="background-color: rgb(202,75,69); height: 60h;">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="11"
          >
            <h1 style="color: white; font-size: 46px;"  class="justText mb-4">
              The Route
            </h1>
            <p class='justText' style="color: white;" >
              NOMA to NOMA will start with a neutral rollout to Chef Mentor/Hwy 90 and continue until the pack arrives at Michoud Blvd, where the flag drops and riders are allowed to set their desired pace. This year's ride contains 7 stops, 3 of which will be completely unsupported. The first checkpoint, Rigolets Bait & Seafood, will have water, but riders are NOT REQUIRED TO STOP.<br>
              <br>
              Next, take a left on Old Spanish Trail/LA Hwy 433, then either the Tammany Trace or U.S. Route 190 to the Mandeville Trailhead along the Tammany Trace for stop #2, the first unattended stop. Riders will be REQUIRED to stop, locate the hanging hole-punch, and punch the appropriate spot on their Brevet d’Gorman card.<br>
              <br>
              Take Florida St/U.S Route 190 to LA Hwy 22 on the way to the checkpoint #3 in Ponchatoula at the corner of Hwy 22 & Hwy 51 near the Train. This is the first FULLY SUPPORTED STOP and is presented by Palmarès Cycling. There will be water, nutrition, and emergency mechanic services if needed. Riders are NOT REQUIRED to stop, however note that many shops and stores along Hwy 51 and in the LaPlace area have been closed. <br>
              <br>
              Stop #5 is located at the gazebo on River Rd. on the East side of the Bonne Carré Spillway. Here riders will, again, locate and use the hole-punch. Riders will then take the Mississippi River Trail to unsupported stop #6, the Hale Boggs Bridge in Luling. Another hole-punch will be under the Luling Bridge, located on a “Bicycle Path” street sign along Mississippi River Trail. <br>
              <br>
              The last stop will be fully supported, and located under the Huey P. Bridge. There will be water, nutrition, beer and emergency bike needs available. After that, head home to the New Orleans Museum of Art, where the Finish Line will be located behind NOMA on the Roosevelt Mall by Tad Gormley stadium.<br>
            </p>
          </v-col>
        </v-row>
      </div>
      <div style="position: relative; z-index: 9999;">
        <v-parallax
          dark
          height="100%"
          src="./assets/noma2019_05.jpg"
        >
            <v-row
            class="mb-10"
            align="center"
            justify="center">
              <v-col
                cols="12"
                sm="12"
              > 
                <h4 align="center"
                  justify="center" style="font-size: 46px;" class="mt-13 justText">
                  The JC Monti Memorial 150
                </h4>
              </v-col>
              <v-col
                cols="6"
                md="6"
              >
              <v-img    aspect-ratio="1" src="./assets/JCM.jpg"></v-img>
              </v-col>
              <v-col
                cols="12"
                md="6"
                align="center"
            justify="center"
              >
                <p class='justText'>
                      John-Carlo Monti came up in the New Orleans bike scene as a talented up-and-coming photographer and film maker. JC passed shortly after the first edition of NOMA to NOMA in 2019, where he took part as our lone race photographer. Riding alongside our race director and enduring the long day on the road, JC managed to find a unique perspective, and truly captured the spirit of this race. His passion for film and photography was only matched by his smile and charm.
                    </p>
              </v-col>
            </v-row >
        </v-parallax>
      </div>
      <div style="background-color: rgb(202,75,69); height: 22vh;">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
          <h1 h4 style="color: white; font-size: 46px;" class="justText" >
              Stsrting Soon!
            </h1>
              <div>
              <Countdown  end="October 03, 2021"></Countdown>
              </div>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mdiInstagram } from '@mdi/js';
import { Icon } from '@iconify/vue2';
import  Countdown  from 'vuejs-countdown'




  export default {
      components:{
        Icon,
        Countdown
      },
      methods: {
      insta () {  
        window.open("https://www.instagram.com/nomatonoma/", "_blank");  
      },
      bikeReg () {  
        window.open("https://www.bikereg.com/nomatonoma?fbclid=IwAR2mqeZEvr8AklJWy7iJPUxyQ5iEubaSphhrCdgslDVvVnks0MKQz-iYhuo", "_blank");  
      },
      usac () {  
        window.open("https://membership.usacycling.org/one-day/6377", "_blank");  
      },
      instaStrava () {  
        window.open("https://www.strava.com/routes/2844283895391826238?fbclid=IwAR3GkOx-0SBLZ4F9v8eSDShmawdonIxdLUKtI3FpAxvQPPJfCqcaBjoPHP4", "_blank");  
      },
      startCallBack: function(x) {
        console.log(x);
      },
      endCallBack: function(x) {
        console.log(x);
      },
      data: () => ({
          mdiInstagram:  mdiInstagram,
          route:[
            {info:"03 October 2021"},
            {info:"06:00 AM"},
            {info:"150 miles"},
          ],
        }
      )}
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
.stuff {
    padding-bottom: 5px;
    border-top: 1px solid white !important;
    border-left: 1px solid white !important
}
.justText{
  font-family: 'Righteous', sans-serif;
  font-size: 18px
}
.titleText{
  font-family: 'Righteous', sans-serif;
}
.tiktok {
  color: white;
}
</style>
