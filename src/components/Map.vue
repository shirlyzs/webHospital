<template>
  <div class="map">
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>
 
<script>
export default {
  name: 'Map',
  methods: {
    local() {
      var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [117.121591, 36.662599],
        zoom: 13
      })

      // 定位当前位置
      map.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        function onComplete(data) {
          var myposition = [data.position.lng, data.position.lat]
          drive(myposition)
        }
      })
      // 导航
      var drive = function(myposition) {
        AMap.plugin('AMap.Driving', function() {
          var driving = new AMap.Driving({
            policy: AMap.DrivingPolicy.LEAST_TIME,
            map: map,
            panel: 'panel'
          })
          var startLngLat = myposition
          var endLngLat = [117.121591, 36.662599]
          driving.search(startLngLat, endLngLat, function(status, result) {
            console.log(status, result)
          })
        })
      }

      var infoWindow = new AMap.InfoWindow({
        // isCustom: true, //使用自定义窗体
        content:
          '<div><img style="margin-top:10px;width:200px;height:100px" src="http://yiyuan.9939.com/upload/20170329/24/m4ij20q0tq3jpg.jpg" /><h4>山东省立医院</h4><p>综合性医院</p>济南市历下区经十路9677号</div>', //信息窗体的内容可以是任意html片段
        offset: new AMap.Pixel(16, -45)
      })
      var onMarkerClick = function(e) {
        infoWindow.open(map, e.target.getPosition())
      }
      var marker = new AMap.Marker({
        position: [117.121591, 36.662599]
      })
      map.add(marker)
      marker.on('click', onMarkerClick)
    }
  },
  mounted() {
    this.local()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#container {
  width: 800px;
  height: 500px;
}
</style>
