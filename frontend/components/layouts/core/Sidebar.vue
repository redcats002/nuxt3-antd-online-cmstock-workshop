<template>
  <a-layout-sider
    collapsible
    v-model:collapsed="collapsed"
    class="tw-bg-white tw-drop-shadow-md"
    breakpoint="xl"
    @collapse="onCollapse"
  >
    <div class="logo tw-h-[100px] tw-w-[100px]" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="light"
      mode="inline"
      class="tw-p-2 tw-rounded-md"
    >
      <template v-for="(item, i) in menuList">
        <a-menu-item
          v-if="!item.isSub"
          :key="`menu${i}`"
          @click="$router.push(item.to!)"
          class="tw-rounded-md"
        >
          <Icon :icon="item.icon"></Icon>
          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-sub-menu :key="`sub${i}`" v-else class="tw-rounded-md">
          <template #title>
            <span>
              <Icon :icon="item.icon"></Icon>
              <span> {{ item.name }}</span>
            </span>
          </template>
          <a-menu-item
            v-for="(sub, j) in item.options"
            :key="`sub-${i}-${j}`"
            @click="$router.push(item.to!)"
          >
            <span>{{ sub.name }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  StockOutlined,
  InfoCircleFilled,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    StockOutlined,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const collapsed = ref<boolean>(false);
    const selectedKeys = ref<string[]>(['1']);
    const menuList = reactive([
      { name: 'Stock', to: '/stock', icon: StockOutlined, isSub: false },
      { name: 'Report', to: '/report', icon: PieChartOutlined, isSub: false },
      {
        name: 'Navigation 3',
        icon: TeamOutlined,
        options: [
          { name: 'Option 1', to: '/nav3-op-1', icon: 'StockOutlined' },
          { name: 'Option 2', to: '/nav3-op-2', icon: 'StockOutlined' },
        ],
        isSub: true,
      },
      {
        name: 'Navigation 4',
        icon: UserOutlined,
        options: [
          { name: 'Option 1', to: '/nav4-op-1' },
          { name: 'Option 2', to: '/nav4-op-2' },
          { name: 'Option 2', to: '/nav4-op-3' },
        ],
        isSub: true,
      },
      {
        name: 'Navigation 5',
        icon: FileOutlined,
        options: [
          { name: 'Option 1', to: '/nav5-op-1' },
          { name: 'Option 2', to: '/nav5-op-2' },
          { name: 'Option 2', to: '/nav5-op-3' },
          { name: 'Option 2', to: '/nav5-op-4' },
        ],
        isSub: true,
      },
      { name: 'About', to: '/about', icon: InfoCircleFilled, isSub: false },
    ]);

    const onCollapse = (collapsed: boolean, type: string) => {
      if (type == 'responsive') {
        emit('update:collapsed', !props.collapsed);
      }
    };
    return {
      collapsed,
      selectedKeys,
      menuList,
      onCollapse,
    };
  },
});
</script>
