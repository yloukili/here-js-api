require 'open-uri'
require 'colorize'

desc 'Download modules'
task :download => [:scripts, :styles]

desc 'Download scripts' ; task :scripts
desc 'Download styles' ; task :styles

task :default do
  system "rake -T"
end

MODULES = {
  scripts: %w(core.js service.js places.js ui.js mapevents.js clustering.js),
  styles: %w(ui.css),
}
API_VERSION = File.read('API_VERSION').strip
API_VERSION_MAJOR = API_VERSION.split('.').first
URL_TEMPLATE = "https://js.api.here.com/v#{API_VERSION_MAJOR}/#{API_VERSION}/mapsjs-%s"
PATH_TEMPLATE = '%s/mapsjs-%s'

def download(url, to:)
  puts "#{'downloading'.light_white}: #{url}"
  open(url) do |stream|
    content = stream.read
    content0 = File.read(to) if File.exist?(to)
    if content != content0
      File.write(to, content)
      puts "#{'written'.light_yellow}: #{to}"
    else
      puts "#{'identical'.light_green}: #{to}"
    end
  end
end

def fetch(type)
  MODULES[type].each do |name|
    url = URL_TEMPLATE % [name]
    path = PATH_TEMPLATE % [type, name]
    file path => 'API_VERSION' do |t|
      download url, to: path
    end
    task type => path
  end
end

fetch :scripts
fetch :styles
