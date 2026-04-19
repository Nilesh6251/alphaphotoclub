import os
import glob
import re

html_files = glob.glob('*.html')

aos_css = '<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">\n'
lenis_css = '<link rel="stylesheet" href="https://unpkg.com/lenis@1.1.9/dist/lenis.css">\n'
aos_js = '<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>\n'
lenis_js = '<script src="https://unpkg.com/lenis@1.1.9/dist/lenis.min.js"></script>\n'
gsap_js = '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>\n'

preloader_html = '''
<!-- Premium Preloader -->
<div class="preloader">
    <div class="preloader-content">
        <span class="preloader-text" style="color: #D4AF37;">Apex Photo Club</span>
        <div class="preloader-line"></div>
    </div>
</div>

<!-- Custom Cursor -->
<div class="custom-cursor"></div>
<div class="custom-cursor-follower"></div>
'''

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add CSS in head before closing </head>
    if 'aos.css' not in content:
        content = content.replace('</head>', aos_css + lenis_css + '</head>')
    
    # Add JS before closing </body>
    if 'aos.js' not in content:
        content = content.replace('</body>', gsap_js + lenis_js + aos_js + '</body>')
    
    # Add Preloader & Cursor after <body>
    if 'class="preloader"' not in content:
        content = content.replace('<body>', '<body>\n' + preloader_html)

    # Add general AOS animation classes using regex, skip if already present
    if 'data-aos=' not in content:
        content = re.sub(r'<section([^>]*)>', r'<section\1 data-aos="fade-up" data-aos-duration="1000">', content)
        content = re.sub(r'<h1([^>]*)>', r'<h1\1 data-aos="zoom-in" data-aos-delay="200">', content)
        content = re.sub(r'<h2([^>]*)>', r'<h2\1 data-aos="zoom-in" data-aos-delay="200">', content)
    
    # Ensure magnetic logic is somewhat there
    content = content.replace('class="btn"', 'class="btn magnetic"')
    content = content.replace('class="btn btn-gold"', 'class="btn btn-gold magnetic"')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated HTML files successfully")
