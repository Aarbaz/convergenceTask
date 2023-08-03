<?php
function printZigZag($columns, $rows) {
    $matrix = array();
    $counter = 1;

    // Create a 2D array with zeros
    for ($i = 0; $i < $rows; $i++) {
        for ($j = 0; $j < $columns; $j++) {
            $matrix[$i][$j] = $counter++;
        }
    }

    // Print the array in zigzag format
    echo '<table style="border-collapse: collapse;">';
    for ($i = 0; $i < $rows; $i++) {
        echo '<tr>';
        if ($i % 2 !== 0) {
            for ($j = $columns - 1; $j >= 0; $j--) {
                echo '<td style="border: 1px solid black; padding: 5px;">' . $matrix[$i][$j] . '</td>';
            }
        } else {
            for ($j = 0; $j < $columns; $j++) {
                echo '<td style="border: 1px solid black; padding: 5px;">' . $matrix[$i][$j] . '</td>';
            }
        }
        echo '</tr>';
    }
    echo '</table>';
}

$columns = 7;
$rows = 2;
printZigZag($columns, $rows);
?>
