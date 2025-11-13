{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx = {
    previews = [{
      name = "web";
      command = [ "npm" "run" "dev" "--" "--port" "5173" ];
      port = 5173;
    }];
  };
}
