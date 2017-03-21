require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'
require 'shellwords'

desc "Generate blog files"
task :generate do
  system "bundle exec jekyll build --incremental"
end

desc "Generate and publish blog to master"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    system "mv _site/* #{tmp}"
    system "git checkout -B master"
    system "rm -rf *"
    system "mv #{tmp}/* ."
    message = "Site updated at #{Time.now.utc}"
    system "git add --all"
    system "git commit -am #{message.shellescape}"
    system "git push origin master:master --force"
    system "git checkout develop"
  end
end

task :default => :publish
