<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "booking";
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id, name, specialties, availability, photo FROM doctors";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
    echo "<div class='description-doctor'>";
    echo "<h3>" . $row["name"] . "</h3>";
    echo "<img src='" . $row["photo"] . "' alt='" . $row["name"] . "'>";
    echo "<h5>Specialties: " . $row["specialties"] . "</h5>";
    echo "<h5>Availability: " . $row["availability"] . "</h5>";
    
    echo "</div><hr>";
}
} else {
    echo "No doctors found.";
}

    $conn->close();
    ?>