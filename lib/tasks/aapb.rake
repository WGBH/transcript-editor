require 'fileutils'
require_relative '../aapb/transcript_seeds_job'
require_relative '../aapb/download_transcripts_job'

namespace :aapb do
  # Usage rake aapb:create_seeds['ids_file_path','sample-project']
  desc "Generates a transcripts seeds CSV file from a file of AAPB guids"
  task :create_seeds, [:ids_file_path, :project_key] => :environment do |task, args|
    raise "Not a valid ids_file_path #{args[:ids_file_path]}" unless File.exist?(args[:ids_file_path])
    raise "Not a valid project_key" unless Dir.exist?(Rails.root.join('project', args[:project_key]))

    ids = build_ids_array(args[:ids_file_path])
    AAPB::TranscriptSeedsJob.new(ids,args[:project_key]).run!
  end

  # Usage rake aapb:download_transcripts['ids_file_path','sample-project']
  desc "Downloads transcripts specified in AAPBRecords to an aapb directory in a project's transcript directory"
  task :download_transcripts, [:ids_file_path, :project_key] => :environment do |task, args|
    raise "Not a valid ids_file_path #{args[:ids_file_path]}" unless File.exist?(args[:ids_file_path])
    raise "Not a valid project_key" unless Dir.exist?(Rails.root.join('project', args[:project_key]))

    ids = build_ids_array(args[:ids_file_path])
    AAPB::DownloadTranscriptsJob.new(ids,args[:project_key]).run!
  end

  def build_ids_array(file_path)
    File.readlines(file_path).map { |id| id.tr("\n","") }
  end
end
