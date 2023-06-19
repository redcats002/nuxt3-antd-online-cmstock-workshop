<template>
  <a-layout-sider
    collapsible
    v-model:collapsed="collapsed"
    class="tw-bg-[#001e26]"
    breakpoint="xl"
    @collapse="onCollapse"
  >
    <a-row class="tw-p-4 tw-w-full">
      <img
        alt="example"
        src="~/assets/images/nuxt3.png"
        class="tw-object-contain tw-object-center tw-rounded-lg tw-transition-all"
      />
      <!-- <span class="tw-font-bold">Logo</span> -->
    </a-row>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      class="tw-p-2 tw-rounded-md tw-bg-transparent tw-border-transparent"
    >
      <template v-for="(item, i) in menuList" :key="i">
        <a-menu-item
          v-if="!item.isSub"
          :key="item.to"
          @click="$router.push(item.to!)"
          class="tw-rounded-md tw-transition-all hover:tw-shadow-[#00dc82ff] hover:tw-shadow-md hover:tw-bg-[#00dc82ff] tw-text-white after:tw-border-[#ffffff]"
        >
          <Icon :component="item.icon"></Icon>

          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-sub-menu
          :key="item.name"
          v-else
          class="tw-rounded-md hover:tw-shadow-[#00dc82ff] hover:tw-shadow-md hover:tw-bg-[#00dc82ff]"
        >
          <template #title>
            <Icon class="tw-text-white" :component="item.icon"></Icon>
            <span class="tw-text-white"> {{ item.name }}</span>
          </template>
          <a-menu-item
            v-for="(sub, j) in item.options"
            :key="`sub-${i}-${j}`"
            @click="$router.push(sub.to!)"
          >
            <span class="tw-text-white">{{ sub.name }}</span>
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
} from "@ant-design/icons-vue";
import Icon from "@ant-design/icons-vue/lib/components/Icon";
import { defineComponent, ref } from "vue";
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
      { name: "Stock", to: "/stock", icon: StockOutlined, isSub: false },
      { name: "Report", to: "/report", icon: PieChartOutlined, isSub: false },
      {
        name: "Navigation 3",
        icon: TeamOutlined,
        options: [
          { name: "Option 1", to: "/nav3O1", icon: "StockOutlined" },
          { name: "Option 2", to: "/nav3O2", icon: "StockOutlined" },
        ],
        isSub: true,
      },
      {
        name: "Navigation 4",
        icon: UserOutlined,
        options: [
          { name: "Option 1", to: "/nav4O1" },
          { name: "Option 2", to: "/nav4O2" },
          { name: "Option 2", to: "/nav4O3" },
        ],
        isSub: true,
      },
      {
        name: "Preferences",
        icon: FileOutlined,
        options: [
          { name: "App", to: "/preferences/app" },
          { name: "Theme", to: "/preferences/theme" },
        ],
        isSub: true,
      },
      { name: "About", to: "/", icon: InfoCircleFilled, isSub: false },
    ];

    const onCollapse = (collapsed: boolean, type: string) => {
      if (type == "responsive") {
        emit("update:collapsed", !props.collapsed);
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
<style>
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #00dc82ff !important;
  border-radius: 5px;
}

.ant-menu-sub.ant-menu-inline {
  background-color: transparent !important;
}

.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
  border-color: white;
}

.ant-menu-submenu-arrow {
  color: white;
}
</style>
