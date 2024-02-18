use std::process::Command;

fn main() {
    let output = Command::new("node")
        .arg("dist/main.js")
        .output()
        .expect("Failed to execute command");

    if output.status.success() {
        println!("Command succeeded!");
    } else {
        println!("Command failed!");
        println!("{}", String::from_utf8_lossy(&output.stderr));
    }

    let json = String::from_utf8_lossy(&output.stdout);
    println!("{}", json);
}
