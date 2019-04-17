<template>
  <div>
    <el-dialog title="添加" :visible.sync="showAdd" :show-close="no">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="title">
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
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="toUP('form')">保存</el-button>
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
  name: "diaLog",
  props: {
    showAdd: {
      type: Boolean,
      required: true
    },
    form: {
      type: Object
    },
    hasType: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      no: false,
      newAuthor: [
        "科训科",
        "骨科",
        "输血科",
        "原创",
        "血液内科",
        "解放军报",
        "成都军区总医院",
        "药学情报室",
        "华西都市报"
      ],
      newType: ["科训动态", "特色医疗", "预防与保健", "医疗与保险", "大众健康"],
      rules: {
        title: [{ required: true, message: "请输入医生名字", trigger: "blur" }],
        author: [{ required: true, trigger: "blur", message: "请选择" }],
        type: [{ required: true, trigger: "change", message: "请选择" }],
        content: [{ required: true, trigger: "blur", message: "请选择" }]
      }
    };
  },
  methods: {
    cancelAdd() {
      this.$emit("cancelAdd", false);
    },
    toUP(e) {
      this.$refs[e].validate(valid => {
        if (valid) {
          this.$emit("toUP", this.form);
        } else {
          return false;
        }
      });
    }
  },
  created() {}
};
</script>

