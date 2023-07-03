<script lang="ts" setup></script>

<template>
  <div class="flex flex-col gap-4">
    <TimelineSection
      :title="'Salenet AG'"
      :desc="'Fullstack Developer'"
      :time="'August 2023 - Now'"
    >
      Developing Flutter WMS apps and Shopware online-shop
    </TimelineSection>
    <TimelineSection
      :title="'Scheppach GmbH'"
      :desc="'Frontend Developer'"
      :time="'February 2022 - August 2023'"
    >
      Leveraged Flutter, Blazor, and Vue.js to create applications such as a
      Technician Portal, a Warehouse Management System, perform an ERP system
      migration, and develop the frontend of a webshop.
    </TimelineSection>
    <TimelineSection
      :title="'Elektrobit Automotive GmbH'"
      :desc="'UX Designer'"
      :time="'August 2021 - February 2022'"
    >
      Conceptualized and developed user-friendly interfaces in the automotive
      sector, worked on a hybrid system (MIB/Android) and integrated Amazon
      Alexa. My tools of choice were design systems like Figma and Sketch, and I
      supported developers through Git/Jira.
    </TimelineSection>
    <TimelineSection
      :title="'University of Ulm'"
      :desc="'Bachelor Media Informatics'"
      :time="'August 2021 - February 2022'"
    >
      completed his Bachelor's degree in Media Informatics at the University of
      Ulm from 2015 to 2021, with a focus on Interactive Systems, Usability
      Engineering, Web Engineering, and User Interface Software Technology.
    </TimelineSection>
  </div>
</template>

<style scoped>
/* div {
  line-height: 1.75em;
  border-top: 3px solid;
  border-image: linear-gradient(
    to right,
    var(--lowlight-color) 0%,
    var(--base-color) 100%
  );
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 32px;

  &:before {
    position: absolute;
    border-radius: 50%;
    padding: 10px;
    height: 1.25em;
    width: 1.25em;
    text-align: center;
    line-height: 1.25em;
  }
}
div:nth-child(odd) {
  border-right: 3px solid;
  padding-left: 0;

  &:before {
    left: 100%;
    margin-left: -20px;
  }
}
div:nth-child(even) {
  border-left: 3px solid;
  padding-right: 0;

  &:before {
    right: 100%;
    margin-right: -20px;
  }
}
div:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
div:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
} */
</style>
