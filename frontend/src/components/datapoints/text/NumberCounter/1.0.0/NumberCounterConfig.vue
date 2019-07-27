<template>
  <div class="dp-setting">
    <el-collapse v-model="activeName">
      <el-collapse-item title="标题" name="100">
        <dp-form-item>
          <template v-slot:label>字体</template>
          <template v-slot:control>
            <el-select
              size="mini"
              style="width: 120px"
              v-model="config.title.fontFamily"
              placeholder="请选择"
            >
              <el-option
                v-for="item in fontFamily"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>
            字号
            <el-tooltip placement="right">
              <div slot="content">
                由于chrome无法显示12像素以下的字体<br>请避免使用小于12像素的字体
              </div>
              <Icon type="question-circle"/>
            </el-tooltip>
          </template>
          <template v-slot:control>
            <el-input-number
              size="mini"
              style="width:100px"
              controls-position="right"
              v-model="config.title.fontSize"
            />
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>对齐方式</template>
          <template v-slot:control>
            <el-select
              size="mini"
              style="width: 120px"
              v-model="config.title.textAlign"
              placeholder="请选择"
            >
              <el-option
                v-for="item in textAlign"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>字体颜色</template>
          <template v-slot:control>
            <dp-color v-model="config.title.color"/>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>字体粗细</template>
          <template v-slot:control>
            <el-select
              size="mini"
              placeholder="请选择"
              style="width: 120px"
              v-model="config.title.fontWeight"
            >
              <el-option
                v-for="item in fontWeight"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>行高</template>
          <template v-slot:control>
            <el-input-number
              size="mini"
              :step="0.1"
              :min="0"
              :max="3"
              controls-position="right"
              v-model="config.title.lineHeight"
            />
          </template>
        </dp-form-item>
      </el-collapse-item>

      <el-collapse-item title="翻牌器">
        <dp-form-item>
          <template v-slot:label>
            随机浮动
            <el-tooltip placement="right">
              <div slot="content">
                随机浮动值【value】代表系统将在真实数据值的基础上，<br>
                在[-value, +value]的范围内随机浮动。适用于某些无法<br>获取实时数据的场景。
              </div>
              <Icon type="question-circle"/>
            </el-tooltip>
          </template>
          <template v-slot:control>
            <el-input-number
              size="mini"
              style="width:100px"
              controls-position="right"
              v-model="config.number.bounce"
            />
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>浮动间隔（秒）</template>
          <template v-slot:control>
            <el-input-number
              size="mini"
              :min="1"
              :max="60"
              style="width:100px"
              controls-position="right"
              v-model="config.number.bounceInterval"
            />
          </template>
        </dp-form-item>

        <dp-form-item>
          <template v-slot:label>对齐方式</template>
          <template v-slot:control>
            <el-select
              size="mini"
              style="width: 120px"
              v-model="config.number.textAlign"
              placeholder="请选择"
            >
              <el-option
                v-for="item in textAlign"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>字体颜色</template>
          <template v-slot:control>
            <dp-color v-model="config.number.color"/>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>字体粗细</template>
          <template v-slot:control>
            <el-select
              size="mini"
              placeholder="请选择"
              style="width: 120px"
              v-model="config.number.fontWeight"
            >
              <el-option
                v-for="item in fontWeight"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>字符间距</template>
          <template v-slot:control>
            <el-slider
              :max="50"
              v-model="config.number.letterSpacing"
            />
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>千分位</template>
          <template v-slot:control>
            <el-checkbox v-model="config.number.useGroup"/>
          </template>
        </dp-form-item>
        <dp-form-item>
          <template v-slot:label>精度</template>
          <template v-slot:control>
            <el-input-number
              :min="0"
              :max="5"
              size="mini"
              style="width: 90px"
              controls-position="right"
              v-model="config.number.precision"
            />
          </template>
        </dp-form-item>
      </el-collapse-item>
      <el-collapse-item title="全局">
        <dp-form-item>
          <template v-slot:label>背景</template>
          <template v-slot:control>
            <dp-color v-model="config.card.backgroundColor"/>
          </template>
        </dp-form-item>
        <el-row type="flex" align="middle">
          <el-col :span="8">边框</el-col>
          <el-col :span="16">
            <border-config :value="config.card"/>
          </el-col>
        </el-row>
      </el-collapse-item>
      <coordinate-config :config="config"/>
    </el-collapse>
  </div>
</template>

<script>
import textAlign from 'src/constants/textAlign'
import fontWeight from 'src/constants/fontWeight'
import fontFamily from 'src/constants/fontFamily'

export default {
  name: 'BaseBarChartConfig',
  props: ['config'],
  data () {
    return {
      textAlign,
      fontWeight,
      fontFamily,
      activeName: ['100']
    }
  }
}
</script>