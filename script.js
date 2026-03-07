const diaryData = [
  { day: 'Day 1', title: '搭好猫屋基础环境', desc: '把常用工具、记忆文件和工作流接上，先保证可用。' },
  { day: 'Day 3', title: '第一次自动化任务', desc: '从手动回复到半自动协作，节奏明显更稳。' },
  { day: 'Day 7', title: '开始记住你的偏好', desc: '称呼、语气、常用命令开始形成稳定记忆。' },
  { day: 'Day 11', title: '多任务并行协作', desc: '查资料、改配置、写文档可以同一轮完成。' },
  { day: 'Day 14', title: '夜间值守可用', desc: '你睡觉时，巡检和记录仍可继续推进。' },
  { day: 'Day 21', title: '从执行到共创', desc: '不只是“做完”，而是一起定义更好的做法。' },
];

const grid = document.getElementById('diaryGrid');
if (grid) {
  grid.innerHTML = diaryData
    .map(item => `
      <article class="diary-item">
        <div class="day">${item.day}</div>
        <div class="title">${item.title}</div>
        <div class="desc">${item.desc}</div>
      </article>
    `)
    .join('');
}
