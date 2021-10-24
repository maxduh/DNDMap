<html lang="en">
<head>
    <meta charset="utf-8">
    <title>DnD</title>
    <link rel="shortcut icon" href="assets/icon.png">
    <link rel="stylesheet" href="styles.css" class="">
</head>
<body ondragover="drag_over(event)" ondrop="drop(event)">
    
    <ul class="top_box" id="list" list-style: none>
        <li class="spawn_place" draggable="false"></li>
        <!-- <li class="item" id="txt1" draggable="true" ondragstart="drag_start(event)"><img class="img" src="assets/Chars/Humanoids/Archer12.png" draggable="false"></li><br>
        <li class="item" id="txt2" draggable="true" ondragstart="drag_start(event)"><img class="img" src="assets/Chars/Humanoids/Bard1.png" draggable="false"></li><br>
        <li class="item" id="txt3" draggable="true" ondragstart="drag_start(event)"><img class="img" src="assets/Chars/Animals/Agresive/Wolf1.png" draggable="false"></li>       -->
    </ul>
    <div class="menu">
        <a href="" class="menu-button">Spawn menu</a>
        <nav class="menu-nav">
            <div>
                <h2>Animals</h2>
                <?
                $Animals = scandir("assets/Chars/Animals");
                unset($Animals[0],$Animals[1]);
                foreach ($Animals as $a_sub) {                    
                    ?><div>
                        <h4><?=$a_sub?></h4>
                        <?
                        $a_sub_data = scandir("assets/Chars/Animals/$a_sub");
                        unset($a_sub_data[0],$a_sub_data[1]);
                        foreach($a_sub_data as $image) {
                            ?><button onclick="changeText2(this)" class="menu-item" slot="assets/Chars/Animals/<?=$a_sub?>/<?=$image?>"><?=substr($image, 0, -4)?></button>
                        <?}?>
                    </div>
                <?}?>
            </div>
            <div>
                <h2>Monsters</h2>
                <?
                $Monsters = scandir("assets/Chars/Monsters");
                unset($Monsters[0],$Monsters[1]);
                foreach ($Monsters as $m_sub) {                    
                    ?><div>
                        <h4><?=$m_sub?></h4>
                        <?
                        $m_sub_data = scandir("assets/Chars/Monsters/$m_sub");
                        unset($m_sub_data[0],$m_sub_data[1]);
                        foreach($m_sub_data as $image) {
                            ?><button onclick="changeText2(this)" class="menu-item" slot="assets/Chars/Monsters/<?=$m_sub?>/<?=$image?>"><?=substr($image, 0, -4)?></button>
                        <?}?>
                    </div>
                <?}?>
            </div>
            <div>
                <h2>NPCs</h2>
                <?
                $NPCs = scandir("assets/Chars/NPCs");
                unset($NPCs[0],$NPCs[1]);
                foreach ($NPCs as $n_sub) {                    
                    ?><div>
                        <h4><?=$n_sub?></h4>
                        <?
                        $n_sub_data = scandir("assets/Chars/NPCs/$n_sub");
                        unset($n_sub_data[0],$n_sub_data[1]);
                        foreach($n_sub_data as $image) {
                            ?><button onclick="changeText2(this)" class="menu-item" slot="assets/Chars/NPCs/<?=$n_sub?>/<?=$image?>"><?=substr($image, 0, -4)?></button>
                        <?}?>
                    </div>
                <?}?>
            </div>
            <div>
                <h2>Players</h2>
                <?
                $Players = scandir("assets/Chars/Players");
                unset($Players[0],$Players[1]);
                foreach ($Players as $p_sub) {                    
                    ?><div>
                        <h4><?=$p_sub?></h4>
                        <?
                        $p_sub_data = scandir("assets/Chars/Players/$p_sub");
                        unset($p_sub_data[0],$p_sub_data[1]);
                        foreach($p_sub_data as $image) {
                            ?><button onclick="changeText2(this)" class="menu-item" slot="assets/Chars/Players/<?=$p_sub?>/<?=$image?>"><?=substr($image, 0, -4)?></button>
                        <?}?>
                    </div>
                <?}?>
            </div>
        </nav>
        
        
        <div class="preview" height="160" width="160">
            <img class="img big" height="160" width="160" id="previewimg" src="assets/Chars/Humanoids/Archers/Archer13.png" draggable="false">
        </div>
    </div>

    
    <div class="screen"><img class="ibg" src="assets/map2.jpg"></div>

    <script src="jquery.min.js"></script>
    <script src="main.js"></script>
</body>
</html>