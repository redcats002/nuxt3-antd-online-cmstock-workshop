<template>
  <a-layout-sider
    collapsible
    v-model:collapsed="collapsed"
    class="tw-bg-white tw-drop-shadow-md"
    breakpoint="xl"
    @collapse="onCollapse"
  >
    <a-row class="tw-p-4 tw-w-full tw-h-[100px]">
      <a-tag
        color="processing"
        class="tw-h-full tw-w-full tw-text-center tw-text-2xl tw-rounded-lg tw-truncate"
      >
        <a-row
          align="center"
          justify="center"
          class="tw-h-full tw-items-center"
        >
          <span class="tw-font-bold">Logo</span>
        </a-row>
      </a-tag>
    </a-row>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="light"
      mode="inline"
      class="tw-p-2 tw-rounded-md"
    >
      <template v-for="(item, i) in menuList" :key="i">
        <a-menu-item
          v-if="!item.isSub"
          :key="item.to"
          @click="$router.push(item.to!)"
          class="tw-rounded-md"
        >
          <Icon :component="item.icon"></Icon>

          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-sub-menu :key="item.name" v-else class="tw-rounded-md">
          <template #title>
            <span>
              <Icon :component="item.icon"></Icon>
              <span> {{ item.name }}</span>
            </span>
          </template>
          <a-menu-item
            v-for="(sub, j) in item.options"
            :key="`sub-${i}-${j}`"
            @click="$router.push(sub.to!)"
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
import Icon from '@ant-design/icons-vue/lib/components/Icon';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    StockOutlined,
    Icon,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const route = useRoute();
    const delayState = useDelay();
    const collapsed = ref<boolean>(false);
    const selectedKeys = ref<string[]>([]);
    //# Menu list is for custom list on sidebar
    const menuList = [
      { name: 'Stock', to: '/stock', icon: StockOutlined, isSub: false },
      { name: 'Report', to: '/report', icon: PieChartOutlined, isSub: false },
      {
        name: 'Navigation 3',
        icon: TeamOutlined,
        options: [
          { name: 'Option 1', to: '/nav3O1', icon: 'StockOutlined' },
          { name: 'Option 2', to: '/nav3O2', icon: 'StockOutlined' },
        ],
        isSub: true,
      },
      {
        name: 'Navigation 4',
        icon: UserOutlined,
        options: [
          { name: 'Option 1', to: '/nav4O1' },
          { name: 'Option 2', to: '/nav4O2' },
          { name: 'Option 2', to: '/nav4O3' },
        ],
        isSub: true,
      },
      {
        name: 'Navigation 5',
        icon: FileOutlined,
        options: [
          { name: 'Option 1', to: '/nav5O1' },
          { name: 'Option 2', to: '/nav5O2' },
          { name: 'Option 2', to: '/nav5O3' },
          { name: 'Option 2', to: '/nav5O4' },
        ],
        isSub: true,
      },
      { name: 'About', to: '/', icon: InfoCircleFilled, isSub: false },
    ];

    const onCollapse = (collapsed: boolean, type: string) => {
      if (type == 'responsive') {
        emit('update:collapsed', !props.collapsed);
      }
    };

    onMounted(async () => {
      await delayState.delay(500);
      selectedKeys.value = [route.path];
    });

    return {
      collapsed,
      selectedKeys,
      menuList,
      onCollapse,
    };
  },
});
</script>
