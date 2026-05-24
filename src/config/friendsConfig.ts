import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Ryofork Blog - 日常分享，作者Ryofork,使用Mizuki搭建",
		imgurl: "https://blog.ryofork.top/_astro/ryofork.MWd7THJS_Z1OoGM1.webp",
		desc: "𝓐𝓯𝓽𝓮𝓻 𝓵𝓮𝓪𝓹𝓲𝓷𝓰 𝓸𝓿𝓮𝓻 𝓽𝓱𝓮 𝓫𝓻𝓲𝓭𝓰𝓮, 𝓘 𝓽𝓸𝓸𝓴 𝓪 𝓵𝓸𝓸𝓴 𝓫𝓪𝓬𝓴 𝓪𝓽 𝓽𝓱𝓮 𝓬𝓲𝓽𝔂, 𝓽𝓸 𝓼𝓮𝓮 𝓷𝓸𝓽𝓱𝓲𝓷𝓰 𝓫𝓾𝓽 𝓯𝓸𝓰.𝓘 𝔀𝓸𝓷𝓭𝓮𝓻 𝓲𝓯 𝓹𝓮𝓸𝓹𝓵𝓮 𝓸𝓷 𝓽𝓱𝓲𝓼 𝓮𝓷𝓭 𝓸𝓯 𝓽𝓱𝓮 𝓫𝓻𝓲𝓭𝓰𝓮 𝓱𝓪𝓿𝓮 𝓮𝓿𝓮𝓻 𝓽𝓱𝓸𝓾𝓰𝓱𝓽 𝓽𝓸 𝓽𝓪𝓴𝓮 𝓪 𝓵𝓸𝓸𝓴 𝓸𝓿𝓮𝓻 𝓽𝓱𝓮𝓻𝓮.𝓣𝓱𝓮 𝓯𝓸𝓰 𝓲𝓼 𝓽𝓱𝓮 𝓼𝓪𝓶𝓮, 𝓷𝓸 𝓶𝓪𝓽𝓽𝓮𝓻 𝓯𝓻𝓸𝓶 𝔀𝓱𝓲𝓬𝓱 𝓼𝓲𝓭𝓮 𝓸𝓯 𝓽𝓱𝓮 𝓻𝓲𝓿𝓮𝓻.𝓓𝓸 𝓽𝓱𝓮𝔂 𝓴𝓷𝓸𝔀 𝓽𝓱𝓮 𝓻𝓪𝓲𝓷 𝓭𝓸𝓮𝓼𝓷'𝓽 𝓬𝓸𝓶𝓮 𝓭𝓸𝔀𝓷 𝓽𝓱𝓮 𝓾𝓼𝓾𝓪𝓵 𝔀𝓪𝔂, 𝓫𝓾𝓽 𝓰𝓸𝓮𝓼 𝓫𝓪𝓬𝓴 𝓾𝓹 𝓽𝓸 𝓽𝓱𝓮 𝓼𝓴𝔂?",
		siteurl: "https://blog.ryofork.top/",
		tags: ["Blog","Friends"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "WXSeek-God的博客 - 一位爱求索的小人",
		imgurl: "https://blog.wxseek.top/_astro/2.DYF3r74w_j6IK2.webp",
		desc: "SeekOS,是Windows精简系统项目",
		siteurl: "https://blog.wxseek.top/",
		tags: ["Blog","Friends"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Bleaz's Blog",
		imgurl: "https://api.bleaz.top/img/links/logo.jpg",
		desc: "不畏过往，不惧将来",
		siteurl: "https://blog.bleaz.net/",
		tags: ["Blog","Friends"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "听书先生的个人博客-书香静雅",
		imgurl: "/assets/images/tingshuxiansheng.jpg",
		desc: "听书先生的科技博客",
		siteurl: "https://tingshuxiansheng.cn",
		tags: ["Blog","Friends"],
		weight: 8,
		enabled: true,
	},
	{
		title: "CakesAreLiesの个人网站",
		imgurl: "/assets/images/cakesarelies.jpg",
		desc: "Starfireの个人网站",
		siteurl: "https://cakesarelies.cn/",
		tags: ["Friends"],
		weight: 9,
		enabled: true,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 4,
		enabled: true,
	},
	{
		title: "《二叉树树》官方网站 - Acofork",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
		desc: "Protect What You Love.",
		siteurl: "https://2x.nz/",
		tags: ["Blog","二叉树树"],
		weight: 7,
		enabled: true,
	},
	{
		title: "夏夜流萤",
		imgurl:
			"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 6, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
