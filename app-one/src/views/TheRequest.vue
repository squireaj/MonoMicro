<template>
  <section class='vasion-calc-height vld-parent' :class="{'dark-mode': isDarkMode }">
    <div class='inner-div request-inner-div'>
      <div class='md-layout'>
        <h1>The Request</h1>
        <div class="md-layout-item vasion-page-title top-margin" v-if="selectedRequest">
          {{ selectedRequest.name }}
        </div>
      </div>
      <div class="status-section">
        <div class="current-status" v-if="this.selectedRequest.status_id === 0">
          <VasionAnonymousWhite class="anonymous-image-pending"/>
          <VasionFullTextUpdateIconLarge class="status-icon-fill"/>
          <h5 class="status-explination">Request Pending</h5>
        </div>
        <div class="current-status" v-else-if="this.selectedRequest.status_id === 1">
          <VasionAnonymousWhite class="anonymous-image-pending"/>
          <VasionDatabaseLookupIconLarge class="status-icon-fill"/>
          <h5 class="status-explination">Your DB is being Created</h5>
        </div>
        <div class="current-status" v-else-if="this.selectedRequest.status_id === 2">
          <VasionAnonymousWhite class="anonymous-image-pending"/>
          <div class="icon-group">
            <VasionDatabaseLookupIconLarge class="status-icon-fill"/>
            <VasionArrowForward class="status-icon-fill"/>
            <VasionDatabaseLookupIconLarge class="status-icon-fill"/>
          </div>
          <h5 class="status-explination">Moving Data</h5>
        </div>
        <div class="current-status" v-else-if="this.selectedRequest.status_id === 3">
          <VasionAnonymousWhite class="anonymous-image-pending"/>
          <div class="icon-group">
            <VasionDatabaseLookupIconLarge class="status-icon-fill"/>
            <VasionArrowForward class="status-icon-fill"/>
            <VasionAnonymousWhite class="small-anonymous"/>
            <VasionArrowForward class="status-icon-fill"/>
            <VasionDatabaseLookupIconLarge class="status-icon-fill"/>
          </div>
          <h5 class="status-explination">Transforming Data</h5>
        </div>
        <div class="current-status" v-else-if="this.selectedRequest.status_id === 4">
          <VasionAnonymousWhite class="anonymous-image-pending"/>
          <h3 class="request-header">Your data is anonymous!</h3>
          <VasionCheck class="status-icon-finished-fill"/>
          <h5 class="status-explination">Finished!</h5>
          <div class="data">
            <div class="request-row">
              <div class="thing">username</div>
              <div class="value">squirescv</div>
            </div>
            <div class="request-row">
              <div class="thing">password</div>
              <div class="value">thisisatest</div>
            </div>
            <div class="request-row">
              <div class="thing">servername</div>
              <div class="value">thisisatest</div>
            </div>
          </div>
        </div>
        <div class="current-status" v-else-if="this.selectedRequest.status_id === 5">
          <VasionAnonymousRed class="anonymous-image-failed"/>
          <VasionExIcon class="anonymous-image-failed"/>
          <h5 class="status-explination">Failed</h5>
        </div>
        <div class="current-status" v-else-if="this.selectedRequest.status_id === 6">
          <VasionAnonymousRed class="anonymous-image-failed"/>
          <VasionccessTimeIcon class="status-icon-fill"/>
          <h5 class="status-explination">Expired</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'ThePendingRequest',
    created: function () {
    },
    data: function () {
      return {
        dropListSelection: '',
        requestStatusTitle: '',
      }
    },
    computed: {
      clients() { return this.$store.state.clients },
      isDarkMode() { return this.$store.state.isDarkMode },
      selectedRequest() { return this.$store.state.selectedRequest },
    },
    watch: {
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
    @import '~printer-logic-components/src/assets/css/variables.scss';
    .anonymous-image-pending {
      width: 100px;
    }
    .anonymous-image-failed {
      width: 100px;
      fill: red;
    }
    .data{
      height: 72px;
      background-color: #3f3f3f;
      border-radius: 5px;
      border: 3px solid black;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      padding: 15px;
      color: white;
      flex-direction: column;
    }
    .icon-group {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
    .request-header {
      font-size: 32px;
      font-family: $font-family-black;
    }
    .request-row {
      display: flex;
      flex-direction: row;
    }
    .current-status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      height: 460px;
    }
    .section {
      width: 928px;
      height: 554px;
      padding: 20px 0 0 0;
    }
    .small-anonymous {
      width: 44px;
      margin: 12px;
    }
    .status-explination {
      // color: #f1f2f3;
      font-size: 24px;
    }
    .status-icon-fill {
      fill: #f1f2f3;
    }
    .status-icon-finished-fill {
      fill: green;
    }
    .status-section {
      width: 900px;
      height: 900px;
      border-radius: 5px;
      // background-color: #292929;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .top-margin {
      margin-top: 20px;
      margin-bottom: 10px;
    }
</style>
