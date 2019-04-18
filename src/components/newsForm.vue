<template>
  <div>
    <el-dialog title="添加" :visible.sync="showAdd" :show-close="no">
      <!-- :rules="rules" -->
      <el-form ref="form" :model="form" label-width="80px">
        <!-- prop="title" -->
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="来源" prop="author">
          <!-- <el-input v-model="form.author"></el-input> -->
          <el-select v-model="form.author" placeholder="请选择" size="mini">
            <el-option v-for="item in newAuthor" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="分类" prop="type" v-if="hasType">
          <el-select v-model="form.type" placeholder="请选择" size="mini">
            <el-option v-for="item in newType" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <el-input type="textarea" v-model="form.content" :autosize="{ minRows:7}"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd">取 消</el-button>
        <el-button type="primary" @click="toUP('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'diaLog',
  props: {
    showAdd: {
      type: Boolean,
      required: true
    },
    form2: {
      type: Object,
      required: true
    },
    hasType: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      no: false,
      form: {},
      newAuthor: [
        '科训科',
        '骨科',
        '输血科',
        '原创',
        '血液内科',
        '解放军报',
        '成都军区总医院',
        '药学情报室',
        '华西都市报'
      ],
      newType: ['科训动态', '特色医疗', '预防与保健', '医疗与保险', '大众健康'],
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        author: [{ required: true, trigger: 'blur', message: '请选择' }],
        type: [{ required: true, trigger: 'change', message: '请选择' }],
        content: [{ required: true, trigger: 'blur', message: '请选择' }]
      }
    }
  },
  methods: {
    cancelAdd() {
      this.$emit('cancelAdd', false)
    },
    toUP(e) {
      this.$refs[e].validate(valid => {
        if (valid) {
          console.log(this.form, '提交')
          this.$emit('toUP', this.form)
        } else {
          return false
        }
      })
    }
  },
  watch: {
    showAdd() {
      this.form = this.form2
      console.log(this.form, 'watch')
    }
  }
}
</script>

