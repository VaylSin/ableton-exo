tailwind.config = {
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('assets/header.jpg')",
                'photo_1': "url('assets/photo-1.jpg')",
                'photo_2': "url('assets/photo-2.jpg')",
                'photo_3': "url('assets/photo-3.jpg')",
                'photo_4': "url('assets/photo-4.jpg')",
                'photo_5': "url('assets/photo-5.jpg')",
                'photo_6-a': "url('assets/photo-6-a.jpg')",
                'photo_7': "url('assets/photo-7.jpg')",
                'photo_8': "url('assets/photo-8.jpg')",
                'poster-meet-the-makers': "url('assets/poster-meet-the-makers.jpg')",
            },
            colors: {
                white: '#ffffff',
                orange: '#ff764d',
                yellow: '#fbffa7',
                purple: '#b1c5ff',
                green: '#b6ffc0',
                pink: '#d5b3ff',
                grey: '#F3F3F3',
                blue: '#0000ff'
            },
            fontFamily: {
                sans: ['Red Hat Text', 'sans-serif'],
            }
        }
    }
}
AOS.init();

