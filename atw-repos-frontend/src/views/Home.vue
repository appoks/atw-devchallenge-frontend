<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <repository-card>

    </repository-card>

    <atw-button>

    </atw-button>

  </div>
</template>

<script>
// @ is an alias to /src


import RepositoryCard from "@/components/RepositoryCard";
import AtwButton from "@/components/shared/atw-button";
export default {
  name: 'Home',
  components: {
    AtwButton,
    RepositoryCard
  }
}
</script>
