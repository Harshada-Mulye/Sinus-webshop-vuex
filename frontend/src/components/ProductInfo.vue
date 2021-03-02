<template>
  <div class="black-square">
    <div class="img-div">
      <img src="@/assets/items/hoodie-fire.png" alt="" />
      <div class="price">
        <p src="@/backend/database/productsSeed.json"></p></div>
      <div class="rating">
        <div class="staricon"><img src="@/assets/items/star.svg" alt="" /></div>
        <div class="staricon"><img src="@/assets/items/star.svg" alt="" /></div>
        <div class="staricon"><img src="@/assets/items/star.svg" alt="" /></div>
      </div>
    </div>
    <div class="menu-box">
      <div class="top-menu-box">
        <div class="header-box">
          <h1>Green Hoodie</h1>
        </div>
        <div class="closebutton">
          <img src="@/assets/icons/close.svg" alt="" />
        </div>
      </div>
      <div class="info-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="size-box">
        <div class="size-button">S</div>
        <div class="size-button">M</div>
        <div class="size-button">L</div>
      </div>
      <div class="bottom-box">
        <button class="add-to-cart-button">
          <p>Lägg till varukorg</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  }
</script>

<style>
.black-square {
  background-color: rgba(0, 0, 0, 0.9);
  color: rgb(255, 255, 255);
  width: 500px;
  border-radius: 15px;
  display: center;
  justify-content: space-between;
  padding: 10px;
}
.top-menu-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
}
.img-div {
  margin-right: 10px;
  background-color: white;
  border-radius: 4px;
  height: 300px;
  width: 300px;
  border: 2px solid #e84b38;
  color: #e84b38;
  position: relative;
}
.img-div img {
  height: 100%;
  width: auto;
}
.header-box {
  flex: 1;
}
.info-box {
  text-align: left;
}
.size-box {
  display: flex;
  margin: 9px 0 9px 0;
}
.size-button {
  margin-right: 5px;
  border: 1px solid #e84b38;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e84b38;
}
.add-to-cart-button {
  border: 2px solid white;
  border-radius: 2px;
  background-color: #e84b38;
  padding: 10px;
  width: 150px;
  margin-top: 60px;
  cursor: pointer;
}
.bottom-box {
  display: flex;
  justify-content: center;
  margin-top: 7px;
}
.header-box h1 {
  color: #e84b38;
}
.price {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
}
.rating {
  position: absolute;
  top: 10px;
  left: 10px;
}
.staricon {
  height: 20px;
  width: 20px;
}
.menu-box {
}
.closebutton img {
  height: 20px;
  width: 20px;
}
</style>