<template>
  <v-layout>
    <v-flex>
      <v-container grid-list>
        <v-row justify="center">
          <h1>Furkan Aytan</h1>
        </v-row>
        <v-row>
          <h4>Computer Engineer • Programmer • Game Developer.</h4>
        </v-row>
        <v-row class="mt-5" justify="center">
          <v-btn icon outlined><a href="https://steamcommunity.com/id/Azsharax"><v-icon outline icon="mdi-steam" /></a> </v-btn>
          <v-btn icon outlined><a href ="https://www.linkedin.com/in/furkan-aytan/"><v-icon icon="mdi-linkedin" /></a></v-btn>
          <v-btn icon outlined><a href="https://github.com/Asharax"><v-icon icon="mdi-github" /></a></v-btn>
          <v-btn icon outlined><a href="mailto:furkaan.aytan@gmail.com"><v-icon icon="mdi-mail" /></a></v-btn>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Roadmap",
        href: "https://vuetifyjs.com/introduction/roadmap/",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
