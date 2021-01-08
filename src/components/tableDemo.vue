<template>
  <div>
    <el-row type="flex" justify="end">
      <el-col :span="6"><el-button type="primary" @click="getData">获取数据</el-button></el-col>
    </el-row>
    <div class="tableC">
      <el-table
        v-perfect-scrollbar
        border
        resizable
        :data="tableData">

        <el-table-column
          sortable="custom"
          prop="column_1"
          label="行1"
          show-overflow-tooltip
          width="120">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_2"
          label="行2"
          show-overflow-tooltip
          width="120">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_2 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_3"
          label="行3"
          show-overflow-tooltip
          width="140">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_3 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_4"
          label="行4"
          show-overflow-tooltip
          width="160">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_4 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_5"
          label="行5"
          show-overflow-tooltip
          width="180">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_5 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_6"
          label="行6"
          show-overflow-tooltip
          width="200">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_6 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_7"
          label="行7"
          show-overflow-tooltip
          width="220">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_7 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_8"
          label="行8"
          show-overflow-tooltip
          width="200">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_8 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_9"
          label="行9"
          show-overflow-tooltip
          width="200">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_9 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_10"
          label="行10"
          show-overflow-tooltip
          width="200">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_10 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_11"
          label="行11"
          show-overflow-tooltip
          width="200">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_11 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="column_12"
          label="行12"
          show-overflow-tooltip
          width="200">
          <template  slot-scope="scope">
            <span>{{ scope.row.column_12 }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--用来占位-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    methods:{
      getData(){
        var len=this.tableData.length
        var i=0;
        while(i<50){
          var bz=len+i;
          this.tableData.push(
            {
              column_1: "第1-"+bz+"行的数据",
              column_2: "第2-"+bz+"行的数据",
              column_3: "第3-"+bz+"行的数据",
              column_4: "第4-"+bz+"行的数据",
              column_5: "第5-"+bz+"行的数据",
              column_6: "第6-"+bz+"行的数据",
              column_7: "第7-"+bz+"行的数据",
              column_8: "第8-"+bz+"行的数据",
              column_9: "第9-"+bz+"行的数据",
              column_10: "第10-"+bz+"行的数据",
              column_11: "第11"+bz+"行的数据",
              column_12: "第12-"+bz+"行的数据",
            }
          );
          i++;
        }
      },
    },


  };
</script>
<style scoped>
  .el-row{
    margin-bottom: 15px;
  }
  .el-pagination{
    margin-top: 20px;
  }

</style>
<!---需设置为全局css样式-->
<style>
  /* 设置el-table滚动条的样式 */
  .el-table ::-webkit-scrollbar {
    height: 18px;
  }
  /* 滚动条滑块 */
  .el-table ::-webkit-scrollbar-thumb {
    background:#ccc;
  }
  .tableC{
    position:relative;
  }
  .el-table th{
    height: 60px;
  }
  .el-table td{
    padding:0;
    height: 50px;
    font-size: 14px;
  }
  .el-table.hide-scrollBar{
    /*隐藏滚动条 设置底部padding20px*/
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    padding-bottom: 20px;
  }
  .el-table.hide-scrollBar ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
</style>


