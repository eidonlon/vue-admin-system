<template>
  <div class="search">
    <div class="ztable-search">
      <el-form :inline="true" ref="catForm" :model="catForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="catForm.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="种类" prop="type">
          <el-select v-model="catForm.type" placeholder="种类">
            <el-option v-for="ctype in catType" :label="ctype.text" :value="ctype.value" :key="ctype.text"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" prop="date">
          <el-date-picker v-model="catForm.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="btn-box">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm('catForm')">重置</el-button>
          <!-- <el-button class="search-show-more" @click="toggleMore"><i class="fa fa-angle-down"></i>{{showText}}</el-button> -->
        </el-form-item>
       <!--  <div class="more-search" v-show="showMore">
          <el-form-item label="年龄">
            <el-input v-model="catForm.age" placeholder="年龄"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="catForm.sex" placeholder="性别">
              <el-option label="男猫" value="男猫"></el-option>
              <el-option label="女猫" value="女猫"></el-option>
            </el-select>
          </el-form-item> -->
        <!-- </div> -->
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zsearch',
  data() {
    return {
      showMore: false,
      showText: '更多',
      catForm: {
        name: '',
        type: '',
        date: ''
      },
      formInline: {
        user: '',
        region: '',
        age: ''
      }
    }
  },
  computed:{
     catType: function(){
      return this.$store.state.table.catType;
    }
  },
  watch: {
    showMore: function() {
      this.showMore ? this.showText = '收起' : this.showText = '更多';
    }
  },
  methods: {
    onSubmit: function() {
      if (this.catForm.name || this.catForm.type || this.catForm.date) {
        this.$emit("search", this.catForm);
      }
    },
    toggleMore: function() {
      this.showMore = !this.showMore;
    },
    resetForm: function(form) {
      this.$refs[form].resetFields();
      this.$emit("reset");
    }
  }
};

</script>
<style>
.search-show-more {
  border: none !important;
  padding: 10px 5px !important;
}

.search-show-more i {
  font-size: 16px !important;
  margin-right: 7px !important;
}

.search-show-more:hover {
  background: #fff !important;
  color: #81b38a !important;
}

.search-show-more:focus {
  background: #fff !important;
}

</style>
