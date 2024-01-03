"use client"

export default function Navbar(){
    return (
        <div>
            <style jsx>
                {`
                    .topnav {
                      overflow: hidden;
                    }
                    
                    .topnav a {
                      float: right;
                      display: block;
                      color: #333;
                      text-align: center;
                      padding: 14px 16px;
                      text-decoration: none;
                      font-size: 25px;
                    }
                    
                    .topnav a:hover {
                      color: blue;
                    }
                    
                    .topnav a.active {
                      color: blue;
                    }
                  
                `}
            </style>
            <div className="topnav">
                <a href="/">خانه</a>
                <a href="/contact">تماس با ما</a>
                <a href="/about">درباره ما</a>
            </div>
        </div>
    )
}