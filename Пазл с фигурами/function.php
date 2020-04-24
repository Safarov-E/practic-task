<?php
    function checkData($a){
        $a = trim($a);
        if ($a=='') return false;
        return htmlspecialchars ($a);
    }
?>