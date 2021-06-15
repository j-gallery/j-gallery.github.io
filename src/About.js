import React, { useState } from "react";

function About() {
    return (
        <div class="about">
            <h2> 소개</h2>
            <div class="author">
                <h3> 장광애  |  Jang, KwangAe</h3>
                <p> 前 부산과학기술대학 공간조형학부 교수</p>
                <p> J Gallery 대표</p>
            </div> 

            <div class="gallery">
                <h3> J Gallery</h3>
                <p> 경상남도 양산시 하북면 예인길 82</p>
                <p> J Gallery는 섬유조형예술 전문 전시장으로, 섬유 예술체험을 비롯한 다양한 창작활동을 하고있는 창작문화예술공간 입니다.</p>
                <p> 1층은 전시장으로 상시 작품이 전시되어 관람할 수 있습니다.</p>
            </div>
        </div>

    );
}

export default About;