<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloView from './views/HelloView.vue'
import RefExample from './views/RefExample.vue'
import SetupExample from './views/SetupExample.vue'
import ReactiveExample from './views/ReactiveExample.vue'
import Computed from './views/Computed.vue'
import Watch from './views/Watch.vue'
import MountExample from './views/MountExample.vue'
import Vif_else from './views/Vif_else.vue'
import Vif_elseif_else from './views/Vif_elseif_else.vue'
import Vshow from './views/Vshow.vue'
import Vfor from './views/Vfor.vue'
import Class from './views/Class.vue'
import Style from './views/Style.vue'
import EventParent from './views/EventParent.vue'
import PropParent from './views/PropParent.vue'
import ModelParent from './views/ModelParent.vue'
</script>

<template>


  <HelloView/>
  <SetupExample/>
  <RefExample/>
  <ReactiveExample/>
  <Computed/>
  <Watch/>
  <MountExample/>
    <Vif_else/>
    <Vif_elseif_else/>
    <Vshow/>
    <Vfor/>
    <Class/>
    <Style/>
    <EventParent/>
    <PropParent/>
    <ModelParent/>
</template>

