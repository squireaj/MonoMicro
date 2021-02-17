<template>
  <div class='vasion-calc-height vld-parent' :class="{'dark-mode': isDarkMode }">
    <Loading :active.sync="isLoading" :is-full-page="false" :color="loaderColor" loader="dots" :background-color="loaderBackgroundColor"></Loading>
    <div class='inner-div'>
      <div class='md-layout'>
        <div class="md-layout-item vasion-page-title top-margin">
          {{ title }}
        </div>
      </div>
      <div v-if="tableData"  class="grid-div vasion-html-table-default">
        <VasionTable
          :ellipsisButtonConfig="ellipsisButtonConfig"
          :headerColumns="columns.Values"
          :tableRows="tableData"
          :hideColumns="hiddenColumns"
          :filterByColumnDefault="1"
          :supportSorting="true"
          @pl-selection="rowClick"
        />
      </div>
      <div class="no-items-div" v-else>
        <div class="vasion-page-subheader instructional-message-div">
          No data to show.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { loaderBackgroundColor, loaderColor } from '@/assets/js/styleConfig'

export default {
  components: {
    Loading,
  },
  name: 'TheList',
  props: {
  },
  computed: {
    isDarkMode() { return this.$store.state.isDarkMode },
    title() { return this.$store.state.currentListTitle },
  },
  async created() {
    this.isLoading = true
    this.tableData = await this.$store.dispatch('getTableData')
    this.isLoading = false
  },
  data: function () {
    return {
      ascendingOrder: false,
      buttons: [],
      columns: {
        Values: ["_VasionCheckBox_","_documentID_","_wFID_","_stepID_","_Priority_","Workflow","Type","Primary ID","Assigned To","Status","Step Name","Due Date"],
        ValueType: 'String',
      },
      deleteJobId: 0,
      deleteJobName: '',
      deleteMessage: '',
      ellipsisButtonConfig: {
        buttons: [
          {
            id: 'edit-item-button',
            name: 'Edit Item',
            icon: 'PlEditIcon',
          },
          {
            id: 'delete-item-button',
            name: 'Delete Item',
            icon: 'PlDeleteIcon',
          },
        ],
      },
      headerCheckboxToggled: false,
      hiddenColumns: ['_WorkflowID_', 'Import / Export'],
      isLoading: false,
      jobs: true,
      loaderBackgroundColor: loaderBackgroundColor,
      loaderColor: loaderColor,
      showDeleteDialog: false,
      tableData: {},
      scheduledType: '',
      showSnackbarBool: false,
      snackbarImage: false,
      snackbarTitle: '',
      snackbarSubTitle: '',
      sortTableBy: 0,
    }
  },
  methods: {
    ellipsisButtonClicked(payload) {
      if (payload?.item?.Values[0]) {
        const [id, name, type] = payload.item.Values
        switch (payload.buttonId) {
          case 'edit-automation-engine-button':
            this.editJob(type, id)
            break;
          case 'delete-automation-engine-button':
            this.deleteMessage = `Are you sure you want to delete "${name}"?`
            this.deleteJobId = id
            this.deleteJobName = name
            this.showDeleteDialog = true
            break;
          default:
            break;
        }
      }
    },
    handleNewClick(destination) {
      this.$router.push({ name: destination, params: { schedulerId: 0 } })
    },
    rowClick(selection) {
      console.log('selection', selection)
    },
    toggleDeleteDialog() {
        this.showDeleteDialog = !this.showDeleteDialog
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';
  .dark-mode {
    background-color: $darkModeBackground;
    .vasion-lightest-gray-background{
      background-color: #000000 !important;
    }
  }
  .button-div {
    margin: auto;
    margin-top: 30px;
    width: 288px;
  }

  .inner-div {
    padding-top: 8px;
    margin-right: 8px;
    margin-left: 16px;
    text-align: center;
  }

  .instructional-message-div {
    margin-top: 24px;
  }

  .main-div {
    background-color: white;
    width: 100%;
  }

  .no-items-div {
    margin-top: 60px;
  }
  .top-margin {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .grid-div {
    height: calc(100vh - 125px);
    overflow: auto;
    text-align: left;
  }

  .image-column {
    max-width: 40px;
    width: 40px;
    fill: $grey-400;
    padding-left: 15px;
  }

  .image-column-end {
    max-width: 100px;
    width: 100px;
    fill: $grey-400;
    padding-right: 15px;
  }

  .name-column {
    width: 30%;
  }

</style>
