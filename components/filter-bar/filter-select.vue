<template>
  <div class="filter-select">
    <el-select
      v-model="selectValue"
      :multiple="multiple"
      :collapse-tags="multiple"
      size="small"
      placeholder="请选择"
      @change="changeHandler">
      <el-option
        v-for="item in filters"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'filter-select',

  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
    filters: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      selectValue: []
    }
  },

  watch: {
    value (newVal, oldVal) {
      if (newVal === oldVal) return
      if (!this.multiple) {
        this.selectValue = newVal.length > 0 ? newVal[0].toString() : ''
      } else {
        this.selectValue = newVal
      }
    }
  },

  methods: {
    changeHandler (value) {
      let selectResult = []
      if (!this.multiple) {
        selectResult[0] = value
      } else {
        selectResult = value.map(val => {
          return val
        })
      }
      this.$emit('change', selectResult)
      this.$emit('input', selectResult)
    }
  },

  created () {
    this.selectValue = !this.multiple ? this.value[0] : this.value
  }
}
</script>

<style>

</style>
