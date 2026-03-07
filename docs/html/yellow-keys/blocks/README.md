# 🎵 黄黑键音乐学校 · 区块提取总览

> **项目路径**：`/Users/devlink/code/study/zbox/blocks/`
> **源页面路径**：`/Users/devlink/code/study/zbox/html/yellow-keys/`
> **提取时间**：2026-03-06
> **区块总数**：52 个（分布于 6 个页面目录）

---

## 命名规则

```
{区块功能名}_{6位随机字符串}.html
```

- **区块功能名**：使用英文小写+连字符，描述区块所属功能（如 `hero`、`nav`、`faq`）
- **随机字符串**：大小写字母+数字，共 6 位，确保文件名唯一性
- **页脚区块共享**：`index/footer_dqIHTD.html` 为所有页面通用，其他页面不重复提取

---

## 目录结构

```
blocks/
├── README.md              ← 本文档
├── index/                 ← 首页区块（11个）
├── courses/               ← 课程页区块（7个）
├── teachers/              ← 名师页区块（8个）
├── events/                ← 活动页区块（8个）
├── campuses/              ← 校区页区块（8个）
└── news/                  ← 新闻页区块（8个）
```

---

## index/ · 首页区块（11个）

> 源文件：`html/yellow-keys/index.html`

| 文件名 | 区块描述 | 源文件行范围 |
|--------|----------|-------------|
| `nav_DnlJIe.html` | 导航栏（无高亮，首页默认状态） | L21–48 |
| `hero_Mz55Xq.html` | 首屏区块（左文右图 Hero + 双按钮） | L52–75 |
| `partners_XbZiFk.html` | 合作品牌/伙伴滚动展示区块 | L77–108 |
| `image-left-text-right_xRQiQ9.html` | 左图右文介绍区块（摇滚乐队课特色） | L110–136 |
| `text-left-image-right_0FNQCh.html` | 左文右图介绍区块（古典钢琴课特色） | L138–161 |
| `features_Wo21C6.html` | 特性优势区块（4项卡片式特点展示） | L163–195 |
| `testimonials_EfPKIT.html` | 学员/家长评价区块（3条评价卡片） | L197–240 |
| `stats_hlIiMr.html` | 数据统计区块（4项核心数字展示） | L242–262 |
| `faq_d7Ia9f.html` | 常见问题区块（4条 Q&A 折叠列表） | L264–286 |
| `cta_fz55HI.html` | 行动召唤区块（黄底预约试听按钮） | L288–302 |
| `footer_dqIHTD.html` | **公共页脚**（全站通用，包含品牌+地址+联系+二维码） | L304–343 |

---

## courses/ · 课程页区块（7个）

> 源文件：`html/yellow-keys/courses.html`
> 页脚复用 `index/footer_dqIHTD.html`，不重复提取

| 文件名 | 区块描述 | 源文件行范围 |
|--------|----------|-------------|
| `nav_r5Mnjj.html` | 导航栏（高亮"课程"） | L21–48 |
| `hero_j1tnaZ.html` | 首屏区块（左文右图 + 课程分类标签） | L52–79 |
| `course-categories_KndEDh.html` | 课程主分类展示（4类课程网格卡片） | L81–107 |
| `image-left-text-right_CrCC4j.html` | 左图右文介绍（摇滚乐队课程详情） | L109–129 |
| `text-left-image-right_WkFhSt.html` | 左文右图介绍（古典钢琴课程详情） | L131–153 |
| `course-list_Qj4nqm.html` | 课程列表区块（6张课程卡片+下载手册按钮） | L155–200 |
| `faq_TgTiYc.html` | 课程常见问题（4条 FAQ） | L202–224 |
| `cta_fFXuJu.html` | 行动召唤区块（黄底预约+电话咨询） | L226–240 |

---

## teachers/ · 名师页区块（8个）

> 源文件：`html/yellow-keys/teachers.html`
> 页脚复用 `index/footer_dqIHTD.html`，不重复提取

| 文件名 | 区块描述 | 源文件行范围 |
|--------|----------|-------------|
| `nav_K0NGMC.html` | 导航栏（高亮"名师"） | L21–48 |
| `hero_0CQY0u.html` | 首屏区块（演奏家导师团，左文右图） | L52–79 |
| `filter-tags_caT10U.html` | 师资筛选标签栏（按乐器类别筛选导师） | L81–104 |
| `teacher-grid_co3Au9.html` | 首席导师展示网格（6位名师卡片+查看更多） | L106–267 |
| `features_0LoJAq.html` | 导师优势特点区块（4项卡片：舞台经验/教材/双师/升学） | L269–299 |
| `image-left-text-right_yZMkjt.html` | 大师班日程区块（左图右文，公开课报名） | L301–329 |
| `teacher-stories_H0zEFW.html` | 名师育人故事区块（3位导师专访引用卡片） | L331–377 |
| `cta_DiDqNq.html` | 行动召唤区块（黄底预约名师体验+咨询） | L379–393 |

---

## events/ · 活动页区块（8个）

> 源文件：`html/yellow-keys/events.html`
> 页脚复用 `index/footer_dqIHTD.html`，不重复提取

| 文件名 | 区块描述 | 源文件行范围 |
|--------|----------|-------------|
| `nav_AjhaJx.html` | 导航栏（高亮"活动"） | L21–48 |
| `hero_ZSkAUo.html` | 首屏区块（音乐活动嘉年华，左文右图） | L52–79 |
| `filter-tags_9kjUJ4.html` | 活动分类筛选标签栏（按活动类型筛选） | L81–100 |
| `featured-events_1HSFX5.html` | 热门活动推荐（1大卡+2并排小卡，时效性突出） | L102–176 |
| `event-calendar_w1wF9x.html` | 四月活动日历（6张日期卡片+下载日历按钮） | L178–262 |
| `past-events_IAaEUb.html` | 往期活动回顾（3张图文卡片+观看视频按钮） | L264–309 |
| `faq_ihSXmx.html` | 活动常见问题（4条 FAQ） | L311–334 |
| `cta_nN6dvg.html` | 行动召唤区块（黄底订阅活动日历+咨询顾问） | L336–350 |

---

## campuses/ · 校区页区块（8个）

> 源文件：`html/yellow-keys/campuses.html`
> 页脚复用 `index/footer_dqIHTD.html`，不重复提取

| 文件名 | 区块描述 | 源文件行范围 |
|--------|----------|-------------|
| `nav_2Z0ULm.html` | 导航栏（高亮"校区"） | L21–48 |
| `hero_CIhDTD.html` | 首屏区块（全国15+校区概览，左文右图） | L52–79 |
| `filter-tags_35SbdQ.html` | 城市快速筛选标签栏（按城市筛选校区） | L81–104 |
| `campus-grid_AfxFW2.html` | 校区展示网格（6城市卡片，含筹备中状态） | L106–322 |
| `features_4xP74B.html` | 校区统一设施标准（4项特性：钢琴/声学/智能/休息区） | L324–354 |
| `image-left-text-right_V3ktZ4.html` | 校区参观预约（左图右文，开放日 + VR 探校） | L356–383 |
| `faq_rr05YM.html` | 校区常见问题（4条 FAQ） | L385–408 |
| `cta_MrJpAD.html` | 行动召唤区块（黄底登记意向城市+加盟合作） | L410–423 |

---

## news/ · 新闻页区块（8个）

> 源文件：`html/yellow-keys/news.html`
> 页脚复用 `index/footer_dqIHTD.html`，不重复提取

| 文件名 | 区块描述 | 源文件行范围 |
|--------|----------|-------------|
| `nav_xMcXxW.html` | 导航栏（高亮"新闻"） | L21–48 |
| `hero_plCwSJ.html` | 首屏区块（新闻与故事，左文右图） | L52–79 |
| `filter-tags_P9lpua.html` | 新闻分类筛选标签栏（按类别筛选） | L81–100 |
| `featured-news_qt0S90.html` | 热点新闻区块（1大置顶卡+2并排次要热点） | L102–173 |
| `news-list_MDTSYs.html` | 新闻列表区块（6条卡片网格+圆形分页组件） | L175–268 |
| `image-left-text-right_Tc70y0.html` | 人物专访深度报道（左图右文，学员故事） | L270–292 |
| `newsletter-subscribe_m2IMHF.html` | 邮件订阅区块（深色背景+邮箱输入+立即订阅按钮） | L294–310 |
| `contribute_hamrpY.html` | 新闻投稿邀请区块（本页特有，左文右按钮横幅） | L312–327 |

---

## 公共区块说明

| 区块文件 | 说明 | 使用页面 |
|----------|------|----------|
| `index/footer_dqIHTD.html` | 全站统一页脚，包含 Logo + 地址 + 联系方式 + 公众号二维码 | 所有 6 个页面 |

---

## 通用区块复用参考

以下区块在各页面中为**同类型、不同内容**的变体，可参考对应页面目录下的文件：

| 区块类型 | 所有变体目录 |
|----------|-------------|
| `nav_*.html` 导航栏 | index / courses / teachers / events / campuses / news |
| `hero_*.html` 首屏 Hero | index / courses / teachers / events / campuses / news |
| `filter-tags_*.html` 筛选标签栏 | teachers / events / campuses / news |
| `faq_*.html` 常见问题 | index / courses / events / campuses |
| `cta_*.html` 行动召唤 | index / courses / teachers / events / campuses |
| `image-left-text-right_*.html` 左图右文 | index / courses / teachers / events / campuses / news |
| `features_*.html` 特性卡片 | index / teachers / campuses |
