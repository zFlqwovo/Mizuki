// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Redmi: [
		{
			name: "Redmi Note 12T Pro",
			image: "/images/device/n12tp.jpg",
			specs: "Black / 12G + 512GB",
			description:
				"LCD，天玑8200 Ultra，144 Hz 高刷，5080 mAh 电池和 67W 快充，极为先进的3.5mm耳机接口",
			link: "https://www.mi.com/redmi-note-12t-pro",
		},
	],
	// Router: [
	// 	{
	// 		name: "GL-MT3000",
	// 		image: "/images/device/mt3000.png",
	// 		specs: "1000Mbps / 2.5G",
	// 		description:
	// 			"Portable WiFi 6 router suitable for business trips and home use.",
	// 		link: "https://www.gl-inet.cn/products/gl-mt3000/",
	// 	},
	// ],
};
