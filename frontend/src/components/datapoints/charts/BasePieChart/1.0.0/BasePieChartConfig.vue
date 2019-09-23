<template>
  <div class="dp-setting base-pie-chart-config">
    <el-collapse v-model="activeName">
      <el-collapse-item title="半径">
        <dp-form-item>
          <template v-slot:label>内半径</template>
          <template v-slot:control>
            <percent-slider v-model="config.chartOption.series[0].radius[0]"/>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>外半径</template>
          <template v-slot:control>
            <percent-slider v-model="config.chartOption.series[0].radius[1]"/>
          </template>
        </dp-form-item>
      </el-collapse-item>
      <el-collapse-item title="图例">
        <dp-form-item>
          <template v-slot:label>显示</template>
          <template v-slot:control>
            <el-checkbox v-model="config.chartOption.legend.show"/>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>文本</template>
          <template v-slot:control>
            <text-style :value="config.chartOption.legend.textStyle"/>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>位置</template>
          <template v-slot:control>
            <el-select
              size="mini"
              style="width: 120px"
              v-model="config.chartOption.legend.position"
            >
              <el-option value="1" label="顶部左对齐" />
              <el-option value="2" label="顶部居中" />
              <el-option value="3" label="顶部右对齐" />
              <el-option value="4" label="左侧上对齐" />
              <el-option value="5" label="左侧居中" />
              <el-option value="6" label="左侧下对齐" />
              <el-option value="7" label="右侧上对齐" />
              <el-option value="8" label="右侧居中" />
              <el-option value="9" label="右侧下对齐" />
              <el-option value="10" label="底部左对齐" />
              <el-option value="11" label="底部居中" />
              <el-option value="12" label="底部右对齐" />
            </el-select>
          </template>
        </dp-form-item>
      </el-collapse-item>
      <el-collapse-item name="series">
        <div slot="title">
          数据列
          <i
            class="el-icon-plus"
            @click.stop="addSeries"
            v-if="isShowSeriesOperation"
          />
          <i
            class="el-icon-delete"
            @click.stop="removeSeries"
            v-if="isShowSeriesOperation"
          />
        </div>
        <el-tabs v-model="activeTab">
          <el-tab-pane
            :label="`系列${index+1}`"
            :key="index"
            :name="index.toString()"
            v-for="(item, index) in config.chartOption.color"   
          >
            <dp-form-item>
              <template v-slot:label>颜色</template>
              <template v-slot:control>
                <dp-color v-model="config.chartOption.color[index]"/>
              </template>
            </dp-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-collapse-item>
      <coordinate-config :config="config"/>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'BasePieChartConfig',
  props: ['config'],
  computed: {
    isShowSeriesOperation () {
      return this.activeName.indexOf('series') >= 0
    }
  },
  data () {
    return {
      activeName: ['100'],
      activeTab: '0'
    }
  },
  methods: {
    addSeries () {
      let lastTab = this.config.chartOption.color.length

      this.config.chartOption.color.push('#67e2fb')
      this.activeTab = lastTab.toString()
    },
    removeSeries () {
      this.config.chartOption.color.splice(activeTab, 1)
    }
  }
}
</script>

<style lang="scss">
.base-pie-chart-config {
  .el-icon-plus {
    margin-left: 200px;
  }
  .el-icon-delete {
    margin-left: 15px;
  }
}

</style>