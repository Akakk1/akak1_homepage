document.addEventListener('DOMContentLoaded', function() {
    const glassPanel = document.getElementById('glassPanel');
    const liquidDrop = document.getElementById('liquidDrop');
    const dropButtons = document.querySelectorAll('[data-drop]');
    
    // 为按钮添加水滴效果
    dropButtons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const glassRect = glassPanel.getBoundingClientRect();
            
            // 计算水滴位置
            const x = e.clientX - glassRect.left;
            const y = e.clientY - glassRect.top;
            
            // 更新水滴位置和大小
            document.documentElement.style.setProperty('--drop-x', `${x}px`);
            document.documentElement.style.setProperty('--drop-y', `${y}px`);
            document.documentElement.style.setProperty('--drop-size', '120px');
            document.documentElement.style.setProperty('--drop-scale', '1');
            
            // 增加玻璃透明度
            document.documentElement.style.setProperty('--glass-opacity', '0.5');
        });
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const glassRect = glassPanel.getBoundingClientRect();
            
            // 计算水滴位置
            const x = e.clientX - glassRect.left;
            const y = e.clientY - glassRect.top;
            
            // 更新水滴位置
            document.documentElement.style.setProperty('--drop-x', `${x}px`);
            document.documentElement.style.setProperty('--drop-y', `${y}px`);
        });
        
        button.addEventListener('mouseleave', () => {
            // 隐藏水滴
            document.documentElement.style.setProperty('--drop-size', '0');
            document.documentElement.style.setProperty('--drop-scale', '0.5');
            
            // 恢复玻璃透明度
            document.documentElement.style.setProperty('--glass-opacity', '0.4');
        });
    });
    
    // 添加技能条动画
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});
