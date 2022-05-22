export const sideBarData:any[] = [
    {
        title: 'sổ đoàn',
        icon:'auto_stories',
        subMenu:[
            {
                title: 'Danh sổ đoàn',
                path: 'union-list',
                icon:'group',
            },
        ]
    },
    {
        title: 'khoa & lớp',
        icon:'school',
        subMenu:[
            {
                title: 'Danh sách khoa',
                path: 'class-list',
                icon:'group',
            },
            {
                title: 'Danh sách lớp',
                path: 'major-list',
                icon:'group',
            },
            {
                title: 'Danh sách sinh viên',
                path: 'student-list',
                icon:'group',
            }
        ]
    },
    {
        title: 'Đánh giá rèn luyện',
        icon:'gavel',
        subMenu:[
            {
                title: 'Điểm đoàn viên',
                path: '',
                icon:'list_alt',
            },
            {
                title: 'Điểm lớp',
                path: '',
                icon:'fact_check',
            },
            {
                title: 'Điểm khoa',
                path: '',
                icon:'fact_check',
            },
            {
                title: 'Điểm trường',
                path: '',
                icon:'fact_check',
            },
            {
                title: 'Phiếu chấm',
                path: '',
                icon:'checklist_rtl',
            }
        ]
    },
    {
        title: 'Đánh giá cán bộ',
        icon:'gavel',
        subMenu:[
            {
                title: 'Chấm điểm',
                path: '',
                icon:'list_alt',
            },
            {
                title: 'Xem điểm',
                path: '',
                icon:'fact_check',
            },
            {
                title: 'Danh sách điểm cá nhân',
                path: '',
                icon:'fact_check',
            },
            {
                title: 'Danh sách điểm cán bộ',
                path: '',
                icon:'fact_check',
            }
        ]
    },
]