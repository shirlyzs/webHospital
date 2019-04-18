<template>
  <div>
    <el-dialog title="添加" :visible.sync="showAdd" :show-close="no">
      <!-- :rules="rules" -->
      <el-form ref="form" :model="from"  label-width="80px">
        <el-form-item label="医生名字" prop="doctorName">
          <el-input v-model="from.doctorName"></el-input>
        </el-form-item>
        <el-form-item label="职称" prop="ranks">
          <el-select v-model="from.ranks" placeholder="请选择">
            <el-option label="主任医师" value="主任医师"></el-option>
            <el-option label="副主任医师" value="副主任医师"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主科室" prop="department">
          <el-select v-model="from.department" placeholder="请选择" size="mini" @change="changeKeShi">
            <el-option label="内科" value="内科"></el-option>
            <el-option label="外科" value="外科"></el-option>
            <el-option label="医技" value="医技"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分科室" prop="keShi">
          <el-select v-model="from.keShi" placeholder="请选择" size="mini">
            <div v-if="from.department=='内科'">
              <el-option label="消化内科" value="消化内科"></el-option>
              <el-option label="肾脏病科" value="肾脏病科"></el-option>
              <el-option label="肿瘤科" value="肿瘤科"></el-option>
              <el-option label="呼吸内科" value="呼吸内科"></el-option>
              <el-option label="内分泌科" value="内分泌科"></el-option>
              <el-option label="神经内科" value="神经内科"></el-option>
            </div>
            <div v-if="from.department=='外科'">
              <el-option label="肝胆病科" value="肝胆病科"></el-option>
              <el-option label="耳鼻喉科" value="耳鼻喉科"></el-option>
              <el-option label="胃肠病科" value="胃肠病科"></el-option>
              <el-option label="皮肤科" value="皮肤科"></el-option>
              <el-option label="骨科" value="骨科"></el-option>
              <el-option label="泌尿外科" value="泌尿外科"></el-option>
              <el-option label="神经外科" value="神经外科"></el-option>
            </div>
            <div v-if="from.department=='医技'">
              <el-option label="麻醉科" value="麻醉科"></el-option>
              <el-option label="核医学科" value="核医学科"></el-option>
            </div>
            <div v-if="from.department=='其他'">
              <el-option label="急诊科" value="急诊科"></el-option>
              <el-option label="病理科" value="病理科"></el-option>
            </div>
          </el-select>
        </el-form-item>
        <el-form-item label="简介" prop="resume">
          <el-input type="textarea" v-model="from.resume"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="toUP('form')">立即创建</el-button>
          <el-button @click="cancelAdd">取消</el-button>
        </el-form-item>
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="showAdd = false">取 消</el-button>
        <el-button type="primary" @click="showAdd = false">确 定</el-button>
      </div>-->
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
    }
  },
  data() {
    return {
      no: false,
      rules: {
        doctorName: [
          { required: true, message: '请输入医生名字', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],

        keShi: [{ required: true, trigger: 'change', message: '请选择' }],
        department: [
          {
            required: true,
            trigger: 'change',
            message: '请选择'
          }
        ],
        resume: [
          {
            required: true,
            trigger: 'blur',
            message: '请选择'
          }
        ],
        ranks: [
          {
            required: true,
            trigger: 'change',
            message: '请选择职称'
          }
        ]
      },
      from: {
        doctorName: '',
        password: '',
        keShi: '',
        department: '',
        resume: '',
        ranks: '',
        ordersNum: '',
        price: '',
        image: '',
        isEdit: false
      }
    }
  },
  methods: {
    changeKeShi() {
      this.from.keShi = ''
    },
    cancelAdd() {
      this.$emit('cancelAdd', false)
    },
    toUP(e) {
      this.$refs[e].validate(valid => {
        if (valid) {
          console.log(this.from)

          this.$emit('toUP', 1, this.from, '添加')
        } else {
          return false
        }
      })
    }
  },
  watch: {
    showAdd() {
      console.log(33)
      this.from = {
        doctorName: '',
        password: '',
        keShi: '',
        department: '',
        resume: '',
        ranks: '',
        ordersNum: '',
        price: '',
        image: '',
        isEdit: false
      }
    }
  }
}
</script>

