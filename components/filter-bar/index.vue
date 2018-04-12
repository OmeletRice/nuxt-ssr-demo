<template>
  <div class="filter-bar">
    <div class="filter-item">
      <div class="filter-item__label">
        <p>Time:</p>
      </div>
      <div class="filter-item__select">
        <filter-select
          :multiple="true"
          @change="multipleChangeHandler"
          :filters="options"
          v-model="value"
        />
      </div>
    </div>
    
    <!-- <filter-select
      :multiple="false"
      @change="singleChangeHandler"
      :filters="options"
      v-model="value"       
    /> -->
  </div>
</template>

<script>
import FilterSelect from './filter-select'

export default {
  name: 'filter-bar',

  components: {
    FilterSelect
  },

  data () {
    return {
      value: [],
      options: [
        {
          label: 'last one week',
          value: '20180504'
        },
        {
          label: 'all',
          value: 'all'
        }
      ]
    }
  },

  methods: {
    multipleChangeHandler (value) {
      console.log('multiple', value)
    },
    singleChangeHandler (value) {
      console.log('sigle', value)
    }
  }
}
</script>

<style lang="scss">
.filter-bar {
  padding: 10px;
}

.filter-item {
  display: inline-block;

  &__label {
    display: inline-block;
    margin-right: 10px;
  }

  &__select {
    display: inline-block;
  }
}
</style>
