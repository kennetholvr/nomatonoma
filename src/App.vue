<template>
  <v-app id="inspire">
    <v-app-bar
            color="rgb(29,32,48)"
            dark
    >
      <Icon v-on:click="insta" icon="mdi:instagram" color="white" style="font-size: 24px;" />
      <v-toolbar-title class="titleText" v-on:click="insta">NOMAtoNOMA</v-toolbar-title>
      <v-divider inset vertical></v-divider>
      <v-spacer></v-spacer>
      <Icon v-on:click="instaStrava" icon="mdi:strava" color="white" style="font-size: 24px;" />
      <v-toolbar-title class="titleText" v-on:click="instaStrava">NOMAtoNOMA</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div style="position: relative; z-index: 9999; background-color: #fff;">
        <v-parallax
          dark
          src="./assets/noma2019_17.jpg"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="text-center"
              cols="12"
            >
              <h1 class="titleText text-h4  mb-2">
                NOMA To NOMA
              </h1>
              <h4 class="justText">
                the Race Around the Lake
              </h4>
              <h4 lass="justText">
                October 3rd, 2021 - New Orleans, LA
              </h4>
            </v-col>
          </v-row>
        </v-parallax>
      </div>
      <div style="background-color: rgb(29,32,48); height: 5vh;"/>
      <div style="background-color: rgb(202,75,69); height: 60h;">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="6"
          >
            <h1 style="color: white;" class="text-h4 titleText mb-4" color="white">
              The Route
            </h1>
            
              <v-row no-gutters >
                <v-col
                  v-for="blob in route"
                  :key="blob"
                  cols="12"
                  sm="4"
                  class="stuff"
                  
                >
                  <p style="color: white;">
                    {{blob.info}}
                  </p>
                </v-col>
              </v-row>
            
            <p class='justText' style="color: white;" >
              This unsupported, adventure ride around Lake Pontchartrain, starts and ends just behind City Park's New Orleans Museum of Art.

              Heading East, the group circles the Lake counter-clockwise. Flag drops on Chef Menteur Hwy at the stoplight of Michoud Blvd. This year's ride will contain 6 mandatory stops, 5 of which will be completely unmanned. First is the Rigolet's Bait Shop with a left on Old Spanish Trail/433 immediately after. Second, the Tammany Trace Tunnel, where riders will be turning on to Florida St/Hwy 190. After a long stay on Hwy 22, riders will stop at the ONLY supported checkpoint in Ponchatoula presented by Palmares Cycling.

              After this "halfway" point riders will continue down the longest and most taxing portion of the NOMA route, Old Hwy 51. Hwy 51 will take riders South, almost all the way to the Mississippi River, parrallel to Interstate 55.

              The fourth mandatory stop, Montz Park, is intentionally on the West side of the Bonne Carre Spillway. Riding or walking across the Spillway is mandatory. Unlike previous years, riders will not be allowed to use Airline Hwy on their way back to New Orleans. This stop is the first of 3 checkpoints along the Mississippi River Trail.

              The fifth and sixth checkpoints are under the two bridges along the Mississippi River. First, the Hale Boggs Memorial Bridge in Luling, LA, and second, the Huey P Long Bridge near Elmwood.
            </p>
          </v-col>
        </v-row>
      </div>
      <div style="position: relative; z-index: 9999; ;">
    
          <v-parallax
            dark
            src="./assets/noma2019_05.jpg"
          >
          <v-row
          align="center"
              justify="center">
        <v-col align="center" sm="6">
          <h1 class="text-h4 titleText mb-4">
                  FOR JOHN-CARLO
                </h1>
                <h4 class="subheading">
                  The JC Monti Memorial Gran Fondo
                </h4>
          <v-row style="padding-top: 10px;" no-gutters>
            <v-col
              cols="8"
              sm="6"
              style="padding-right: 10px;"
            >
                <p class='justText'>
                  John-Carlo Monti came up in the New Orleans bike scene as a talented up-and-coming photographer and film maker. As a club co-founder, he used NOLA Fixed riders often as subjects. JC passed shortly after the first edition of NOMA to NOMA in 2019, where he took part as our lone race photographer. Riding alongside our race director and enduring the long day on the road, JC managed to find a unique perspective, and truly captured the spirit of this race. His passion for film and photography was only matched by his smile and charm. We miss you, JC.
                </p>
            </v-col>
            <v-col
              cols="4"
              sm="6"
              style="padding-left: 10px;"
            >
              <v-img  max-height="100%" aspect-ratio="1" src="./assets/JCM.jpg"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
          <h1 class="text-h4 titleText mb-4 tiktok" >
              Coming Soon!
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
      instaStrava () {  
        window.open("https://www.instagram.com/p/CQtb5qVl9Tp/", "_blank");  
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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
.stuff {
    padding-bottom: 5px;
    border-top: 1px solid white !important;
    border-left: 1px solid white !important
}
.justText{
  font-family: 'Lato', sans-serif;
}
.titleText{
  font-family: 'Lato', sans-serif;
}
.tiktok {
  color: white;
}
</style>
