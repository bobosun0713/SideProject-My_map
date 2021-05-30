<template>
  <div class="sidebar vh-100" :class="{ active: isOpenSideBar }">
    <div class="sidebar__btn" @click="toggleMenu">></div>
    <div class="containers">
      <!-- 搜尋 -->
      <div class="sidebar__search px-4">
        <div class="sidebar__search__info">
          <div class="sidebar__search__info-name">
            <img
              class="sidebar__search__info-img"
              src="https://picsum.photos/id/684/40/40"
              alt=""
            />
            訪客模式
          </div>

          <button type="button" class="sidebar__search__info-btn">Login</button>
        </div>

        <div class="sidebar__search__content">
          <input
            class="sidebar__search__content-input"
            type="text"
            placeholder="我的位置"
          />
        </div>

        <div class="sidebar__search__btns">
          <button type="button" class="sidebar__search__btns-btn">
            搜尋紀錄
          </button>
          <button type="button" class="sidebar__search__btns-btn">
            我的紀錄
          </button>
          <button type="button" class="sidebar__search__btns-btn">
            我的最愛
          </button>
        </div>
      </div>

      <!-- 列表 -->
      <div class="sidebar__list">
        <div class="row row-cols-1 px-4 py-4">
          <Card v-for="(item, idx) in 10" :key="idx" class="mb-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card/Card'
export default {
  name: 'navbar',
  components: {
    Card,
  },
  data() {
    return {
      isOpenSideBar: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpenSideBar = !this.isOpenSideBar
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 400px;
  box-shadow: 1px 0px 10px 0 #cee8ea;
  position: relative;
  transition: transform 0.5s;

  &.active {
    transform: translateX(-400px);
  }

  //* 開關
  &__btn {
    position: absolute;
    right: -25px;
    top: 80px;
    width: 25px;
    height: 40px;
    line-height: 35px;
    text-align: center;
    border-radius: 0 10px 10px 0;
    background: linear-gradient(90deg, #60a5d3, #83c8df);
    box-shadow: 1px 0px 10px 0 #cee8ea;
  }

  //* 搜尋區
  &__search {
    background: linear-gradient(90deg, #4d79e2, #83c8df);
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //* 資訊
    &__info {
      display: flex;
      width: 100%;
      margin-bottom: 15px;

      &-img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        object-fit: cover;
      }

      &-btn {
        border: 0;
        margin-left: auto;
        background-color: transparent;
        color: white;
        font-weight: bold;
      }
    }

    //* 搜尋
    &__content {
      width: 100%;

      &-input {
        width: 100%;
        display: block;
        padding: 0 20px;
        height: 40px;
        border: 0;
        border-radius: 20px;
        margin-bottom: 20px;
        box-shadow: 1px 0px 3px 0 #cee8ea;
      }
    }

    //* 切換
    &__btns {
      width: 100%;
      display: flex;
      justify-content: space-between;
      &-btn {
        border: 0;
        border-radius: 20px;
        height: 40px;
        width: 110px;
        background-color: white;
        box-shadow: 1px 0px 3px 0 #cee8ea;
      }
    }
  }

  //* 列表
  &__list {
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(100vh - 200px);
  }
}

//* 捲軸
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-image: linear-gradient(135deg, #83c8df, #4d79e2);
}
</style>
